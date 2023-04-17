
function getColor(color){
    const color1 = color >>> 8;
    const color2 = color << 8;
    color = color1 | color2;

    r = ((color & 0xF800) >>> 11) << 3 | ((color>>>3) & 0x07);
    g = ((color & 0x07E0) >>> 5) << 2| ((color>>>3) & 0x03);
    b = ((color & 0x001F)) << 3| ((color>>>3) & 0x07);
    return [r,g,b]
}
