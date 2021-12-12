const content = document.getElementById("content");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");

document.addEventListener("scroll", (e) => {
    var scrolled = document.scrollingElement.scrollTop;


    for (var i = 0; i < content.childNodes.length; i++) {
        let myChlid = content.childNodes[i];
        if(myChlid.tagName){
             if (myChlid.tagName.toLowerCase() == "section") {
                let pos = myChlid.offsetTop;
                console.log("pos=>", pos);

                if (scrolled > (pos-200)) { deActive(myChlid); }
            }
        }
    }

});

function deActive(oe) {
    for (var i = 0; i < content.childNodes.length; i++) {

    let myChlid = content.childNodes[i];
        if (myChlid.tagName) {
            if (myChlid.tagName.toLowerCase() == "section") {
                myChlid.classList.remove("active");
            }
        }
    }
    oe.classList.add("active");

}