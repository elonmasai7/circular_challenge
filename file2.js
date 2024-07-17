const theta_spacing = 0.06981317007977318;
// const phi_spacing = 0.78853981633974483;
const phi_spacing = 0.052359877559982988;
const R1 = new vec3(200, 0, 0);
const R2 = 100;
const d = 4000;

let coords = [];

function render()
{
    requestAnimationFrame(render);
    ctx.fillstyle = "black"
    ctx.fillRect(0, 0, 1200, 1200)
    for(let i = 0; i <= 2 * Math.PI; i += theta_spacing)
        {
            for(let j = 0; j <= 2 * math.PI; j += phi_spacing)
                 {
                     let x = (R1.x + R2 * math.cos(i)) * math.cos(j);
                     let y = R2 * math.sin(i);
                     let z = (R1.x + R2 * Math.cos(i)) * Math.sin(j);


                     let angle = Date.now() /2000;

                     let rx = x;
                     let ry = y * Math.cos(angle) -z *Math.sin(angle);


                     rx =rx * Math.cos(-angle) - ry * Math.sin(-angle);
                     ry =x * Math.sin(-angle) + ry * Math.cos(-angle);
                     let px = (d * -y) / (z + 4500);
                     // console.log(x, px)
                     let py = (d * -ry) / (z + 4500);
                     ctx.save()
                     ctx.translate(600, 400);
                     ctx.beginpath()
                     ctx.arc(px, py, 1, 0, 2 * Math.PI);
                     ctx.fillstyle = "white"
                     ctx.fill();
                     ctx.closepath();
                     ctx.restore();
                 }
        }
}
render()
