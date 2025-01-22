
const network = new brain.NeuralNetwork({
})

const data = [
    {"input":{"r":0,"g":0,"b":0},"output":[1]},
    {"input":{"r":1,"g":1,"b":1},"output":[0]},
    {"input":{"r":0.15046082043525755,"g":0.6824121531243961,"b":0.1826961817921584},"output":[1]},
    {"input":{"r":0.7102293025935398,"g":0.42036341900547836,"b":0.5409443770590918},"output":[1]},
    {"input":{"r":0.8472230699923664,"g":0.7266301999853684,"b":0.9039827015015756},"output":[0]},
    {"input":{"r":0.6565011690824869,"g":0.25315655009380156,"b":0.9948481425826801},"output":[1]},
    {"input":{"r":0.17504114782718783,"g":0.6388556295664984,"b":0.6134644832039868},"output":[1]},
    {"input":{"r":0.5625007965138236,"g":0.052502870786823364,"b":0.37876438979245175},"output":[1]},
    {"input":{"r":0.2387651580391399,"g":0.08061543539609195,"b":0.45720974948044324},"output":[1]},
    {"input":{"r":0.8378144166557997,"g":0.07311674290239423,"b":0.02229830691422241},"output":[1]},
    {"input":{"r":0.6188506527949218,"g":0.37626242430154844,"b":0.5298375457593143},"output":[1]},
    {"input":{"r":0.103171824289924,"g":0.4809536816711679,"b":0.7172564076765668},"output":[1]},
    {"input":{"r":0.20655738952574132,"g":0.8975806714615056,"b":0.08468863579291575},"output":[0]},
    {"input":{"r":0.08252035327594398,"g":0.7178692479072695,"b":0.6193701310131807},"output":[1]},
    {"input":{"r":0.6071225042200648,"g":0.1923369415446219,"b":0.7907362432406082},"output":[1]},
    {"input":{"r":0.7017577034263782,"g":0.7828092210361886,"b":0.6394755656162769},"output":[0]},
    {"input":{"r":0.1757084462616063,"g":0.1461984711396962,"b":0.5767906430390906},"output":[1]},
    {"input":{"r":0.752245481283792,"g":0.6971546268381821,"b":0.030569727170150385},"output":[0]},
    {"input":{"r":0.9487143266659233,"g":0.5999179399171986,"b":0.3814044049527494},"output":[0]},
    {"input":{"r":0.9371039978322022,"g":0.951603828859773,"b":0.7406347551740393},"output":[0]},
    {"input":{"r":0.44006314809973124,"g":0.516383085887463,"b":0.0804078430004811},"output":[1]},
    {"input":{"r":0.15046082043525755,"g":0.6824121531243961,"b":0.1826961817921584},"output":[1]},
    {"input":{"r":0.7102293025935398,"g":0.42036341900547836,"b":0.5409443770590918},"output":[1]},
    {"input":{"r":0.8472230699923664,"g":0.7266301999853684,"b":0.9039827015015756},"output":[0]},
    {"input":{"r":0.6565011690824869,"g":0.25315655009380156,"b":0.9948481425826801},"output":[1]},
    {"input":{"r":0.17504114782718783,"g":0.6388556295664984,"b":0.6134644832039868},"output":[1]},
    {"input":{"r":0.5625007965138236,"g":0.052502870786823364,"b":0.37876438979245175},"output":[1]},
    {"input":{"r":0.2387651580391399,"g":0.08061543539609195,"b":0.45720974948044324},"output":[1]},
    {"input":{"r":0.8378144166557997,"g":0.07311674290239423,"b":0.02229830691422241},"output":[1]},
    {"input":{"r":0.6188506527949218,"g":0.37626242430154844,"b":0.5298375457593143},"output":[1]},
    {"input":{"r":0.103171824289924,"g":0.4809536816711679,"b":0.7172564076765668},"output":[1]},
    {"input":{"r":0.20655738952574132,"g":0.8975806714615056,"b":0.08468863579291575},"output":[0]},
    {"input":{"r":0.08252035327594398,"g":0.7178692479072695,"b":0.6193701310131807},"output":[1]},
    {"input":{"r":0.6071225042200648,"g":0.1923369415446219,"b":0.7907362432406082},"output":[1]},
    {"input":{"r":0.7017577034263782,"g":0.7828092210361886,"b":0.6394755656162769},"output":[0]},
    {"input":{"r":0.1757084462616063,"g":0.1461984711396962,"b":0.5767906430390906},"output":[1]},
    {"input":{"r":0.752245481283792,"g":0.6971546268381821,"b":0.030569727170150385},"output":[0]},
    {"input":{"r":0.9487143266659233,"g":0.5999179399171986,"b":0.3814044049527494},"output":[0]},
    {"input":{"r":0.9371039978322022,"g":0.951603828859773,"b":0.7406347551740393},"output":[0]},
    {"input":{"r":0.44006314809973124,"g":0.516383085887463,"b":0.0804078430004811},"output":[1]},
    {"input":{"r":0.9467333310448043,"g":0.9471073601572437,"b":0.01837480282946613},"output":[0]},
    {"input":{"r":0.07965122286606463,"g":0.24896147075159525,"b":0.6658002742006166},"output":[1]},
    {"input":{"r":0.4071279754640529,"g":0.8756652038493051,"b":0.9946178749907189},"output":[0]},
    {"input":{"r":0.3930098387220029,"g":0.631294278252891,"b":0.6062875232692062},"output":[1]},
    {"input":{"r":0.739417020179379,"g":0.9589831619527942,"b":0.6473328981123481},"output":[0]},
    {"input":{"r":0.8350927256996898,"g":0.39198125347299806,"b":0.894025842337167},"output":[1]},
    {"input":{"r":0.23405810977687858,"g":0.16987621238642436,"b":0.5277620067597293},"output":[1]},
    {"input":{"r":0.8369718166758711,"g":0.7782104715593363,"b":0.836051199345994},"output":[0]},
    {"input":{"r":0.4825993081105284,"g":0.018642027529927052,"b":0.7806770468966229},"output":[1]},
    {"input":{"r":0.28651303531524186,"g":0.607534060730395,"b":0.43930693094753215},"output":[1]},
    {"input":{"r":0.4434526685933642,"g":0.3838993775267192,"b":0.23597516848883737},"output":[1]},
    {"input":{"r":0.3779914672118705,"g":0.8774310034708397,"b":0.4071670660760329},"output":[0]},
    {"input":{"r":0.9141635162042272,"g":0.2849359264569786,"b":0.6874220432030436},"output":[1]}
]


network.train(data);

colorEl = document.getElementById("color");
GuessEl = document.getElementById("guess");
white_button = document.getElementById("white");
black_button = document.getElementById("black");
print_button = document.getElementById("print");
let color;
setRandomColor();

white_button.addEventListener('click', () => {
    chooseColor(1)
})

black_button.addEventListener('click', () => {
    chooseColor(0)
})

print_button.addEventListener('click', print)

function chooseColor(value) {
    data.push( {
        input : color,
        output: [value],
    })
    setRandomColor();
}

function print() {
    console.log(JSON.stringify(data))
}



function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    }
    const guess = network.run(color)[0];   // Returns decimal based on contrast {0 is white, 1 is black}
    GuessEl.style.color = guess > 0.5 ? '#FFF' : '#000';
    colorEl.style.backgroundColor = "rgba(" + [color.r * 255,color.g * 255,color.b * 255].join(',') + ")";
}


document.getElementById("diagram").innerHTML= brain.utilities.toSVG(network);
