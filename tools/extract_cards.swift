import AppKit
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

struct SheetJob {
    let pdfPath: String
    let ids: [String?]
    let outputDir: String
    let prefix: String
    let rotateClockwise: Bool
    let cellInset: Int
}

let repoRoot = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let sourceRoot = repoRoot.deletingLastPathComponent()
let tempDir = URL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent("cbe-card-sheets", isDirectory: true)

let jobs: [SheetJob] = [
    SheetJob(
        pdfPath: "Public_NP.pdf",
        ids: ["public_comptroller", "public_builder", "public_paternal", "public_committed", "public_shepherd", "public_workhorse", "public_provider", "public_responsible"],
        outputDir: "assets/cards/np",
        prefix: "",
        rotateClockwise: false,
        cellInset: 3
    ),
    SheetJob(
        pdfPath: "Community_NP.pdf",
        ids: ["community_activist", "community_accountable", "community_leader", "community_dedicated", "community_organizer", "community_determined", "community_collaborator", "community_independent"],
        outputDir: "assets/cards/np",
        prefix: "",
        rotateClockwise: false,
        cellInset: 3
    ),
    SheetJob(
        pdfPath: "Private_NP.pdf",
        ids: ["private_lender", "private_employer", "private_buyer", "private_investor", "private_networked", "private_loss_leader", "private_volunteer", "private_broker"],
        outputDir: "assets/cards/np",
        prefix: "",
        rotateClockwise: false,
        cellInset: 3
    ),
    SheetJob(
        pdfPath: "CBE_40s_1.pdf",
        ids: ["002", "001", "004", "003", "006", "005", "008", "007"],
        outputDir: "assets/cards/events",
        prefix: "event_",
        rotateClockwise: true,
        cellInset: 0
    ),
    SheetJob(
        pdfPath: "CBE_40s_2.pdf",
        ids: ["010", "009", "012", "011", "014", "013", nil, "015"],
        outputDir: "assets/cards/events",
        prefix: "event_",
        rotateClockwise: true,
        cellInset: 0
    ),
    SheetJob(
        pdfPath: "CBE_50s_1.pdf",
        ids: ["017", "016", "019", "018", "021", "020", "023", "022"],
        outputDir: "assets/cards/events",
        prefix: "event_",
        rotateClockwise: true,
        cellInset: 0
    ),
    SheetJob(
        pdfPath: "CBE_50s_2.pdf",
        ids: ["025", "024", "027", "026", "029", "028", nil, "030"],
        outputDir: "assets/cards/events",
        prefix: "event_",
        rotateClockwise: true,
        cellInset: 0
    )
]

func run(_ launchPath: String, _ arguments: [String]) throws {
    let process = Process()
    process.executableURL = URL(fileURLWithPath: launchPath)
    process.arguments = arguments
    try process.run()
    process.waitUntilExit()
    guard process.terminationStatus == 0 else {
        throw NSError(domain: "ExtractCards", code: Int(process.terminationStatus), userInfo: [NSLocalizedDescriptionKey: "\(launchPath) failed"])
    }
}

func writeJPEG(_ image: CGImage, to url: URL) throws {
    guard let destination = CGImageDestinationCreateWithURL(url as CFURL, UTType.jpeg.identifier as CFString, 1, nil) else {
        throw NSError(domain: "ExtractCards", code: 1, userInfo: [NSLocalizedDescriptionKey: "Could not create JPEG destination"])
    }
    CGImageDestinationAddImage(destination, image, [kCGImageDestinationLossyCompressionQuality: 0.84] as CFDictionary)
    if !CGImageDestinationFinalize(destination) {
        throw NSError(domain: "ExtractCards", code: 2, userInfo: [NSLocalizedDescriptionKey: "Could not write \(url.path)"])
    }
}

func rotateClockwise(_ image: CGImage) throws -> CGImage {
    let width = image.width
    let height = image.height
    guard let context = CGContext(
        data: nil,
        width: height,
        height: width,
        bitsPerComponent: image.bitsPerComponent,
        bytesPerRow: 0,
        space: image.colorSpace ?? CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    ) else {
        throw NSError(domain: "ExtractCards", code: 3, userInfo: [NSLocalizedDescriptionKey: "Could not create rotation context"])
    }
    context.translateBy(x: CGFloat(height), y: 0)
    context.rotate(by: .pi / 2)
    context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))
    guard let rotated = context.makeImage() else {
        throw NSError(domain: "ExtractCards", code: 4, userInfo: [NSLocalizedDescriptionKey: "Could not rotate image"])
    }
    return rotated
}

struct Bitmap {
    let width: Int
    let height: Int
    let data: [UInt8]
}

func bitmap(from image: CGImage) throws -> Bitmap {
    let width = image.width
    let height = image.height
    let bytesPerPixel = 4
    let bytesPerRow = width * bytesPerPixel
    var data = [UInt8](repeating: 255, count: height * bytesPerRow)
    let colorSpace = CGColorSpaceCreateDeviceRGB()
    let ok = data.withUnsafeMutableBytes { buffer -> Bool in
        guard let context = CGContext(
            data: buffer.baseAddress,
            width: width,
            height: height,
            bitsPerComponent: 8,
            bytesPerRow: bytesPerRow,
            space: colorSpace,
            bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
        ) else { return false }
        context.setFillColor(NSColor.white.cgColor)
        context.fill(CGRect(x: 0, y: 0, width: width, height: height))
        context.interpolationQuality = .high
        context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))
        return true
    }
    if !ok {
        throw NSError(domain: "ExtractCards", code: 6, userInfo: [NSLocalizedDescriptionKey: "Could not create bitmap"])
    }
    return Bitmap(width: width, height: height, data: data)
}

func pixelOffset(_ bitmap: Bitmap, x: Int, y: Int) -> Int {
    return ((y * bitmap.width) + x) * 4
}

func isContentPixel(_ bitmap: Bitmap, x: Int, y: Int) -> Bool {
    let offset = pixelOffset(bitmap, x: x, y: y)
    let r = Int(bitmap.data[offset])
    let g = Int(bitmap.data[offset + 1])
    let b = Int(bitmap.data[offset + 2])
    let a = Int(bitmap.data[offset + 3])
    if a < 16 { return false }
    let distanceFromWhite = (255 - r) + (255 - g) + (255 - b)
    let saturation = max(r, g, b) - min(r, g, b)
    return distanceFromWhite > 24 || (distanceFromWhite > 14 && saturation > 18)
}

func isDarkPixel(_ bitmap: Bitmap, x: Int, y: Int) -> Bool {
    let offset = pixelOffset(bitmap, x: x, y: y)
    let r = Int(bitmap.data[offset])
    let g = Int(bitmap.data[offset + 1])
    let b = Int(bitmap.data[offset + 2])
    let distanceFromWhite = (255 - r) + (255 - g) + (255 - b)
    return min(r, g, b) < 170 || distanceFromWhite > 115
}

func trimToContent(_ image: CGImage, margin: Int = 4) throws -> CGImage {
    let pixels = try bitmap(from: image)
    var rowCounts = [Int](repeating: 0, count: pixels.height)
    var colCounts = [Int](repeating: 0, count: pixels.width)
    for y in 0..<pixels.height {
        for x in 0..<pixels.width {
            if isContentPixel(pixels, x: x, y: y) {
                rowCounts[y] += 1
                colCounts[x] += 1
            }
        }
    }

    let rowThreshold = max(3, pixels.width / 160)
    let colThreshold = max(3, pixels.height / 160)
    guard let minYRaw = rowCounts.firstIndex(where: { $0 >= rowThreshold }),
          let maxYRaw = rowCounts.lastIndex(where: { $0 >= rowThreshold }),
          let minXRaw = colCounts.firstIndex(where: { $0 >= colThreshold }),
          let maxXRaw = colCounts.lastIndex(where: { $0 >= colThreshold }) else {
        return image
    }

    let minX = max(0, minXRaw - margin)
    let minY = max(0, minYRaw - margin)
    let maxX = min(pixels.width - 1, maxXRaw + margin)
    let maxY = min(pixels.height - 1, maxYRaw + margin)
    let rect = CGRect(x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1)
    return image.cropping(to: rect) ?? image
}

func estimateDeskewAngle(_ image: CGImage) throws -> Double {
    let pixels = try bitmap(from: image)
    let step = 3
    let centerX = Double(pixels.width) / 2.0
    let centerY = Double(pixels.height) / 2.0
    var points: [(Double, Double)] = []

    for y in stride(from: 0, to: pixels.height, by: step) {
        for x in stride(from: 0, to: pixels.width, by: step) {
            if isDarkPixel(pixels, x: x, y: y) {
                points.append((Double(x), Double(y)))
            }
        }
    }
    if points.count < 100 { return 0 }

    var bestAngle = 0.0
    var bestScore = -Double.infinity
    for raw in stride(from: -25, through: 25, by: 1) {
        let angle = Double(raw) / 10.0
        let radians = angle * .pi / 180.0
        let cosA = cos(radians)
        let sinA = sin(radians)
        var rows = [Int](repeating: 0, count: pixels.height)
        var cols = [Int](repeating: 0, count: pixels.width)

        for (x, y) in points {
            let dx = x - centerX
            let dy = y - centerY
            let rx = Int(round(dx * cosA - dy * sinA + centerX))
            let ry = Int(round(dx * sinA + dy * cosA + centerY))
            if rx >= 0 && rx < pixels.width && ry >= 0 && ry < pixels.height {
                rows[ry] += 1
                cols[rx] += 1
            }
        }

        let rowScore = rows.reduce(0.0) { $0 + Double($1 * $1) }
        let colScore = cols.reduce(0.0) { $0 + Double($1 * $1) }
        let score = rowScore + (colScore * 0.35)
        if score > bestScore {
            bestScore = score
            bestAngle = angle
        }
    }
    return bestAngle
}

func rotate(_ image: CGImage, degrees: Double) throws -> CGImage {
    if abs(degrees) < 0.05 { return image }
    let radians = degrees * .pi / 180.0
    let width = Double(image.width)
    let height = Double(image.height)
    let newWidth = Int(ceil(abs(width * cos(radians)) + abs(height * sin(radians))))
    let newHeight = Int(ceil(abs(width * sin(radians)) + abs(height * cos(radians))))
    guard let context = CGContext(
        data: nil,
        width: newWidth,
        height: newHeight,
        bitsPerComponent: 8,
        bytesPerRow: 0,
        space: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    ) else {
        throw NSError(domain: "ExtractCards", code: 7, userInfo: [NSLocalizedDescriptionKey: "Could not create deskew context"])
    }
    context.setFillColor(NSColor.white.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: newWidth, height: newHeight))
    context.interpolationQuality = .high
    context.translateBy(x: CGFloat(newWidth) / 2.0, y: CGFloat(newHeight) / 2.0)
    context.rotate(by: CGFloat(radians))
    context.draw(image, in: CGRect(x: -width / 2.0, y: -height / 2.0, width: width, height: height))
    guard let rotated = context.makeImage() else {
        throw NSError(domain: "ExtractCards", code: 8, userInfo: [NSLocalizedDescriptionKey: "Could not deskew image"])
    }
    return rotated
}

func cleanedCardImage(_ image: CGImage) throws -> CGImage {
    let trimmed = try trimToContent(image, margin: 6)
    let angle = try estimateDeskewAngle(trimmed)
    let deskewed = try rotate(trimmed, degrees: angle)
    return try trimToContent(deskewed, margin: 3)
}

func extract(job: SheetJob) throws {
    let pdfURL = sourceRoot.appendingPathComponent(job.pdfPath)
    try FileManager.default.createDirectory(at: tempDir, withIntermediateDirectories: true)
    try run("/usr/bin/qlmanage", ["-t", "-s", "2048", "-o", tempDir.path, pdfURL.path])

    let renderedURL = tempDir.appendingPathComponent("\(job.pdfPath).png")
    guard let source = CGImageSourceCreateWithURL(renderedURL as CFURL, nil),
          let sheet = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
        throw NSError(domain: "ExtractCards", code: 5, userInfo: [NSLocalizedDescriptionKey: "Could not load rendered sheet \(renderedURL.path)"])
    }

    let outputURL = repoRoot.appendingPathComponent(job.outputDir, isDirectory: true)
    try FileManager.default.createDirectory(at: outputURL, withIntermediateDirectories: true)

    let columns = 2
    let rows = 4
    let cellWidth = sheet.width / columns
    let cellHeight = sheet.height / rows

    for index in 0..<min(job.ids.count, columns * rows) {
        guard let id = job.ids[index] else { continue }
        let column = index % columns
        let row = index / columns
        let inset = job.cellInset
        let x = (column * cellWidth) + inset
        let y = (row * cellHeight) + inset
        let width = (column == columns - 1 ? sheet.width - (column * cellWidth) : cellWidth) - (inset * 2)
        let height = (row == rows - 1 ? sheet.height - (row * cellHeight) : cellHeight) - (inset * 2)
        guard let crop = sheet.cropping(to: CGRect(x: x, y: y, width: width, height: height)) else { continue }
        let oriented = job.rotateClockwise ? try rotateClockwise(crop) : crop
        let finalImage = try cleanedCardImage(oriented)
        let output = outputURL.appendingPathComponent("\(job.prefix)\(id).jpg")
        try writeJPEG(finalImage, to: output)
        print("wrote \(output.path)")
    }
}

for job in jobs {
    try extract(job: job)
}
