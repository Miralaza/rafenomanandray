
function test(){
    const v1 = document.querySelector("#v1");
    v1.onclick = chargeVideo();
}
function mir(){
    const v2 = document.querySelector("#v2");
    v2.onclick = Video();
}
function arli(){
    const v3 = document.querySelector("#v3");
    v3.onclick = Videos();
}
function tagnam(){
    const v4 = document.querySelector("#v4");
    v4.onclick = lalan();
}
function minis(){
    const v5 = document.querySelector("#v5");
    v5.onclick = vohib();
}
function rano(){
    const v6 = document.querySelector("#v6");
    v6.onclick = fianar();
}
function simen(){
    const v7 = document.querySelector("#v7");
    v7.onclick = vohiba();
}
function jiro(){
    const v8 = document.querySelector("#v8");
    v8.onclick = vohim();
}

function chargeVideo(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 14 OCT 2022/FAHASALMANA ISANDRA.mp4">
</video>
<h1 style="float: right;">fahasalamana Isandra <br> 14 octobre 2022 <br> district Isandra</h1>`
}
function Video(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 14 OCT 2022/KARAM-PANONDRO iSANDRA.mp4">
</video>
<h1 style="float: right;">karam-panondro<br> 14 octobre 2022 <br> district Isandra</h1>`
}
function Videos(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 14 OCT 2022/PRD KOLONTSAINA.mp4">
</video>
<h1 style="float: right;">Kolontsaina <br> 14 octobre 2022 <br> district Fianarantsoa I</h1>`
}
function lalan(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 14 OCT 2022/LALANGINA TAGNAMARO OCTOBRE 22.mp4">
</video>
<h1 style="float: right;">tangamaro <br> 14 octobre 2022 <br> district Lalangina</h1>`
}
function vohib(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 15 OCT 2022/VOHIBATO MINISITRY NY RANO.mp4">
</video>
<h1 style="float: right;">minisitry ny rano<br> 15 octobre 2022 <br> district Vohibato</h1>`
}
function fianar(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 17 OCT 2022/FIANARANTSOA MIN RANO.mp4">
</video>
<h1 style="float: right;">minisitry ny rano<br> 17 octobre 2022 <br> district Fianarantsoa I</h1>`
}
function vohiba(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 17 OCT 2022/VOHIBATO TOLOTRA SIMENITRA AVY TAM LOHOLON'I MADAGASIKARA.mp4">
</video>
<h1 style="float: right;">tolotra simenitra<br> 17 octobre 2022 <br> district Vohibato</h1>`
}
function vohim(){
    const section = document.querySelector("#content");
    section.innerHTML = `<video controls="controls" style="display: inline; width: 50%; height: 400px;" >
    <source src="video/VAOVAO 17 OCT 2022/JIRO VOHIMARINA LOHOLONA MISY HABILLAGE.mp4">
</video>
<h1 style="float: right;">jiro vohimarina<br> 17 octobre 2022 <br> district Vohibato</h1>`
}
function  acceuil(){
    const ac = document.querySelector("#acceuil")
    ac.innerHTML = `<div class="video">
    <div class="v" id="v1" onclick="test()">
            <video  poster="photo/Capture.png" class="vaovao">
                <source src="video/VAOVAO 14 OCT 2022/FAHASALMANA ISANDRA.mp4">
            </video>
        </a>
    </div>
    <div class="v" id="v2" onclick="mir()">
        <video controls class="vaovao" poster="photo/karapanondro.png">
            <source src="video/VAOVAO 14 OCT 2022/KARAM-PANONDRO iSANDRA.mp4">
        </video>
    </div>
    <div class="v" id="v3" onclick="arli()">
        <video controls class="vaovao">
            <source src="video/VAOVAO 14 OCT 2022/PRD KOLONTSAINA.mp4">
        </video>
    </div> 
    <div class="v" id="v4" onclick="tagnam()">
        <video controls class="vaovao" poster="photo/lalangina.png">
            <source src="video/VAOVAO 14 OCT 2022/LALANGINA TAGNAMARO OCTOBRE 22.mp4">
        </video>
    </div>
    <div class="v" id="v5" onclick="minis()">
        <video controls class="vaovao" poster="photo/rano.png">
            <source src="video/VAOVAO 15 OCT 2022/VOHIBATO MINISITRY NY RANO.mp4">
        </video>
    </div>
    <div class="v" v6" onclick="rano()">
        <video controls class="vaovao" poster="photo/fianarantsoa.png">
            <source src="video/VAOVAO 17 OCT 2022/FIANARANTSOA MIN RANO.mp4">
        </video>
    </div>
    <div class="v" id="v7" onclick="simen()">
        <video controls class="vaovao" poster="photo/vohibato.png">
            <source src="video/VAOVAO 17 OCT 2022/VOHIBATO TOLOTRA SIMENITRA AVY TAM LOHOLON'I MADAGASIKARA.mp4">
        </video>
    </div>
    <div class="v" id="v8" onclick="jiro()">
            <video controls class="vaovao" poster="photo/vohimarina.png">
                <source src="video/VAOVAO 17 OCT 2022/JIRO VOHIMARINA LOHOLONA MISY HABILLAGE.mp4">
            </video>
        </a>
    </div>
</div>
<nav id="navbotton"> 
    <a href="suivant.html" title="suivant">suivant</a>
</nav>`
}
