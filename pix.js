var context;
var max_pix = 12800;
var NumOfPic;
var pixsize;
var red;
var green;
var blue;
var center_calculation_x;
var center_calculation_y;

function putimage(canvas,rawdata,count,filesize,pix,colorcode){
    pixsize = pix;
    center_calculation_x = 400 - (80*pix);
    center_calculation_y = 200 - (40*pix);
    context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<max_pix;i++){
        if(i >= filesize*max_pix) break;
        x = ((i % 160)*pix) + center_calculation_x;
        y = (Math.floor(i / 160)*pix) + center_calculation_y;
        color = getColor(rawdata[i+(max_pix*count)])
        write_Pixel(x,y,color[0],color[1],color[2],colorcode);
    }
}
    

function write_Pixel(x,y,red,green,blue,colorcode){
    switch(colorcode){
        case "1":   //グレースケール
            var glay = (red + green + blue) / 3;
            red = glay;
            green = glay;
            blue = glay;
            break;
        case "2":   //セピア
            var SepiaCode = (0.299*red)+(0.587*green)+(0.114*blue);
            red = SepiaCode
            green = 0.691 * SepiaCode;
            blue = 0.401 * SepiaCode;
            break;
        case "3":   //反転
            red  = 255 - red;
            green = 255 - green;
            blue = 255 - blue;
            break;
    }
    context.fillStyle = "rgba("+ red +","+ green +","+ blue +",1)";
    context.fillRect(x, y, pixsize, pixsize);
}
