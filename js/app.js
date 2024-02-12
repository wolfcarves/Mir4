const spiritsObj = [
    //UNCOMMON
    {css: 'Bunny', grade: 'uncommon', quantity: 0, imgUrl: '/images/Bunny.png', name: 'Bunny Guru Hoppy'},
    {css: 'Carapace', grade: 'uncommon', quantity: 0, imgUrl: '/images/Carapace.png', name: 'Carapace Bettleknight'},
    {css: 'Hip', grade: 'uncommon', quantity: 0, imgUrl: '/images/Hip.png', name: 'Hip Wizard Pottamus'},
    {css: 'Ocean', grade: 'uncommon', quantity: 0, imgUrl: '/images/Ocean.png', name: 'Ocean Lord Goonster'},
    {css: 'Moomoo', grade: 'uncommon', quantity: 0, imgUrl: '/images/Moomoo.png', name: 'Bull Master Moomoo'},
    {css: 'Apestaff', grade: 'uncommon', quantity: 0, imgUrl: '/images/Apestaff.png', name: 'Monkey King Apestaff'},
    {css: 'Wooftain', grade: 'uncommon', quantity: 0, imgUrl: '/images/Wooftain.png', name: 'Canine Boss Wooftain'},
    {css: 'Nirvameow', grade: 'uncommon', quantity: 0, imgUrl: '/images/Nirvameow.png', name: 'Celestial Cat Nirvameow'},
    {css: 'Chacha', grade: 'uncommon', quantity: 0, imgUrl: '/images/Chacha.png', name: 'Disguise Master Chacha'},
    {css: 'Generowl', grade: 'uncommon', quantity: 0, imgUrl: '/images/Generowl.png', name: 'Warrior God Generowl'},
    {css: 'Lamphund', grade: 'uncommon', quantity: 0, imgUrl: '/images/Lamphund.png', name: 'Lantern Master Lamphund'},
    {css: 'Mosla', grade: 'Mosla', quantity: 0, imgUrl: '/images/Mosla.png', name: 'Dark Serpent Mosla'},
    //RARE
    {css: 'Horyong', grade: 'rare', quantity: 0, imgUrl: '/images/horyong.png', name: 'Little Azure Dragon Horyong'},
    {css: 'Skeleton', grade: 'rare', quantity: 0, imgUrl: '/images/skeleton.png', name: 'Skeleton Lionheart Oroonki'},
    {css: 'Oinker', grade: 'rare', quantity: 0, imgUrl: '/images/Oinker.png', name: 'Oinker Piggio'},
    {css: 'Serenity', grade: 'rare', quantity: 0, imgUrl: '/images/Serenity.png', name: 'Serenity Akka'},
    {css: 'Greenfinch', grade: 'rare', quantity: 0, imgUrl: '/images/Greenfinch.png', name: 'Greenfinch Ringring'},
    {css: 'Vampiric', grade: 'rare', quantity: 0, imgUrl: '/images/Vampiric.png', name: 'Vampiric Bat Dracusip'},
    {css: 'Taugon', grade: 'rare', quantity: 0, imgUrl: '/images/Taugon.png', name: 'Violent Monk Taugon'},
    {css: 'Angel', grade: 'rare', quantity: 0, imgUrl: '/images/Angel.png', name: 'Verdant Angel Flory'},
    {css: 'Snow', grade: 'rare', quantity: 0, imgUrl: '/images/Snow.png', name: 'Three Tailed Snow Fox'},
    {css: 'Solari', grade: 'rare', quantity: 0, imgUrl: '/images/Solari.png', name: 'Millenial Fox Solari'},
    {css: 'Seahorser', grade: 'rare', quantity: 0, imgUrl: '/images/Seashorser.png', name: 'Wild Charger Seahorser'},
    {css: 'Doggo', grade: 'rare', quantity: 0, imgUrl: '/images/Doggo.png', name: 'Red Wolf Doggo'},
    //EPIC
    {css: 'Sparkler', grade: 'epic', quantity: 50, imgUrl: '/images/sparkler.png', name: 'Glowing Gem Sparkler'},
    {css: 'Biyoho', grade: 'epic', quantity: 0, imgUrl: '/images/biyoho.png', name: 'Flame Hellborn Biyoho'},
    {css: 'Shaoshao', grade: 'epic', quantity: 0, imgUrl: '/images/Shaoshao.png', name: 'Gem Mania Shaoshao'},
    {css: 'Thunder', grade: 'epic', quantity: 0, imgUrl: '/images/Thunder.png', name: 'Thunder Beast Baratan'},
    {css: 'Flamehorn', grade: 'epic', quantity: 0, imgUrl: '/images/Flamehorn.png', name: 'Fire Devil Flamehorn'},
    {css: 'Leocrat', grade: 'epic', quantity: 0, imgUrl: '/images/Leocrat.png', name: 'Leocrat Khun'},
    {css: 'Verdant', grade: 'epic', quantity: 0, imgUrl: '/images/Verdant.png', name: 'Verdant Watcher Gargas'},
    {css: 'Suparna', grade: 'epic', quantity: 0, imgUrl: '/images/Suparna.png', name: 'Golden Bird Suparna'},
    {css: 'Whaley', grade: 'epic', quantity: 0, imgUrl: '/images/Whaley.png', name: 'Absolute Beauty Whaley'},
    {css: 'Lucky', grade: 'epic', quantity: 0, imgUrl: '/images/Lucky.png', name: 'Lucky Cat Luckster'},
    {css: 'Nyanja', grade: 'epic', quantity: 0, imgUrl: '/images/Nyanja.png', name: 'Assassin Nyanja'},
    {css: 'Reaper', grade: 'epic', quantity: 0, imgUrl: '/images/Reaper.png', name: 'Soul Harvester Reaper'},
    //LEGENDARY
    {css: 'Sige', grade: 'legendary', quantity: 0, imgUrl: '/images/Sige.png', name: 'Legendary SIGE!!!!'},
    {css: 'Ehpaano', grade: 'legendary', quantity: 0, imgUrl: '/images/Ehpaano.jpeg', name: 'Eh paano kung'},
    {css: 'Paano', grade: 'legendary', quantity: 0, imgUrl: '/images/Paano.jfif', name: "Paano mo nasabe"},
    {css: 'Otlum', grade: 'legendary', quantity: 0, imgUrl: '/images/Otlum.jpg', name: 'Legendary Otlum'},
]


//FOR RESPONSIVE HEIGHT
const bgImage = document.querySelector('.bg-image');
const settingsBlocker = document.querySelector('.settings-bg-blocker');

const setHeight = () => {
    const currentHeight = window.innerHeight;
    document.body.style.height = `${currentHeight}px`;    
    bgImage.style.height = `${currentHeight}px`;    
    settingsBlocker.style.height = `${currentHeight}px`;    
}

window.addEventListener('resize', setHeight);
setHeight(); 


// SETTINGS
const settingsContainer = document.querySelector('.settings-container');
const settingBtn = document.querySelector('.settings-btn');
const settingsContent = document.querySelector('.settings-content');
const closeSettingBtn = document.querySelector('.settings-close-btn');

settingBtn.addEventListener('click', () => {
    settingsContainer.style.display = 'block';
    settingsBlocker.style.display = 'block';

    setTimeout(() => {
        settingsContainer.style.transform = 'translateY(0)';
        settingsContainer.style.opacity = '1';
    },50)
})


function closeSettings() {
    settingsContainer.style.display = 'none';
    settingsBlocker.style.display = 'none';
    settingsContainer.style.opacity = '0';
    settingsContainer.style.transform = 'translateY(-10%)';
}

closeSettingBtn.addEventListener('click', () => {
    closeSettings();
})

settingsBlocker.addEventListener('click', () => {
    closeSettings();
})

//TO STOP BUBBLING
settingsContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})



// LOAD HEAD
const stylesheet = document.querySelector('.stylesheet');
const settingToggler = document.querySelector('.settings-toggle');
const settingTogglerCursor = document.querySelector('.settings-toggle-cursor');

//EFFECTS
const optimize = localStorage.getItem('optimize');

if(!optimize) {
    localStorage.setItem('optimize', 'on')
}

if(optimize == 'off') {
    settingToggler.style.transform = 'scale(1)';
    settingToggler.style.opacity = '0.5';
    stylesheet.setAttribute('href', 'css/optimized.css')
}else {
    settingToggler.style.transform = 'scale(-1)';
    stylesheet.setAttribute('href', 'css/style.css')
}

settingToggler.addEventListener('click', () => {
    const state = localStorage.getItem('optimize');

    if(state == 'off') {
        settingToggler.style.transform = 'scale(-1)';
        localStorage.setItem('optimize', 'on');
        location.reload();
    }else {
        settingToggler.style.transform = 'scale(1)';
        settingToggler.style.opacity = '0.5';
        localStorage.setItem('optimize', 'off');
        location.reload();
    }
});

//CURSOR 
const elements = document.getElementsByTagName('*');
const head = document.getElementsByTagName('head')[0];

const cursor = localStorage.getItem('cursor');

if(!cursor) {
    localStorage.setItem('cursor', 'off')
}

if(cursor == 'off') {
    const link = head.querySelector('.linkCursor');
    link.remove();

    settingTogglerCursor.style.transform = 'scale(1)';
    settingTogglerCursor.style.opacity = 0.5;
}else {
    const link = document.createElement('link');
    link.href = 'stylesheet';
    link.rel = 'css/cursor.css';
    link.classList.add('linkCursor');

    head.appendChild(link);

    settingTogglerCursor.style.transform = 'scale(-1)';
}

settingTogglerCursor.addEventListener('click', () => {
    const state = localStorage.getItem('cursor');

    if(state == 'off') {
        settingTogglerCursor.style.transform = 'scale(-1)';
        settingTogglerCursor.style.opacity = 0.5;
        localStorage.setItem('cursor', 'on');
        location.reload();
    }else {
        settingTogglerCursor.style.transform = 'scale(1)';
        localStorage.setItem('cursor', 'off');
        location.reload();
    }
});


//ADD SPIRIT COUNT
const inputValues = document.querySelectorAll('.input-value');
const uncommonCount = document.querySelector('.uncommon-count');
const rareCount = document.querySelector('.rare-count');
const epicCount = document.querySelector('.epic-count');
const applyBtn = document.querySelector('.apply-btn');


inputValues.forEach((inputValue) => {
    inputValue.addEventListener('change', () => {
        let value = parseInt(inputValue.value);

        if(value < 0 || !value) {
            inputValue.value = 0;
        }

        if(value > 5000) {
            inputValue.value = 5000;
        }
    })
})

applyBtn.addEventListener('click', () => {

    settingsContainer.style.display = 'none';
    settingsBlocker.style.display = 'none';
    
    let u = parseInt(uncommonCount.value);
    let r = parseInt(rareCount.value);
    let e = parseInt(epicCount.value);

    inputValues.forEach((inputValue, index) => {
        const objIndex = index * 12;
        let value = parseInt(inputValue.value);

        if(value < 0 || !value) {
            value = 0;
        }

        if(value > 5000) {
            value = 5000;
        }

        const checkValue = value + spiritsObj[objIndex].quantity;

        if(checkValue < 5000) {
            spiritsObj[objIndex].quantity += value;
        }else {
            spiritsObj[objIndex].quantity = 5000;
        }
    })

    inputValues.forEach((inputValue) => {
        inputValue.value = 0;
    })

    u = 0;
    r = 0;
    e = 0;

    updateCount();
})

//FOR TABGRADE BACKGROUND
const tabGrades = document.querySelectorAll('.tab-grade');
const smokes = document.querySelectorAll('.smoke');

for(let i = 0; i < smokes.length; i++) {
    smokes[i].style.opacity = '0';
}

smokes[0].style.opacity = '0.5';

tabGrades.forEach(tabGrade => {
    tabGrade.addEventListener('click', () => {
        tabGrades.forEach(newtabGrade => {
            newtabGrade.classList.remove('tab-grade-active');
            
            for(let i = 0; i < smokes.length; i++) {
                smokes[i].style.opacity = '0';
            }

            tabGrade.firstElementChild.style.opacity = '0.5';
            tabGrade.classList.add('tab-grade-active');
        })
    })
})


const allContainer = document.querySelector('.all-container');
const combineContainer = document.querySelector('.combine-container');
const coverContainer = document.querySelector('.cover-container');
const rares = allContainer.querySelectorAll('.rare');


tabGrades.forEach(tabGrade => {
    tabGrade.addEventListener('click', () => {
        const link = [...tabGrades].indexOf(tabGrade);
        
        switch(link) {
            case 0:
                displayAll();
                break;
            case 1: 
                displayEpic();
                break;
            case 2: 
                displayRare();
                break;
            case 3:
                displayUncommon();
                break;
        }
    })
})


function displayAll() {
    const slots = allContainer.querySelectorAll('.slot');

    resetSlot();

    let index = 0;

    for(let i = 0; i < spiritsObj.length; i++) {
        if(spiritsObj[i].quantity != 0) {
            const div = document.createElement('div');
            div.style.background = `url('${spiritsObj[i].imgUrl}')`
            div.style.backgroundPosition = 'center';
            div.style.backgroundSize = 'cover';
    
            div.classList.add(spiritsObj[i].css, spiritsObj[i].grade, 'spirit');
    
            if(div.classList.contains(spiritsObj[i].css)) {
                div.innerText = spiritsObj[i].quantity;
            }
    
    
            slots[index].append(div);
            index++
        }
    }
    index = 0;

    addSpirit();
}

displayAll()

function displayEpic() {
    const slots = allContainer.querySelectorAll('.slot');

    resetSlot()

    let index = 0;

    for(let i = 0; i < spiritsObj.length; i++) {

        if(spiritsObj[i].quantity != 0) {
            if(spiritsObj[i].grade == 'epic') {
                const epic = spiritsObj[i];
    
                const div = document.createElement('div');
    
                div.style.background = `url('${spiritsObj[i].imgUrl}')`
                div.style.backgroundPosition = 'center';
                div.style.backgroundSize = 'cover';
        
                div.classList.add(epic.css, epic.grade, 'spirit');
    
                div.innerText = epic.quantity;
    
                slots[index].append(div);
    
                index++;
            }
        }
    }
    index = 0;

    addSpirit();

}

function displayRare() {
    resetSlot();

    const slots = allContainer.querySelectorAll('.slot');

    let index = 0;

    for(let i = 0; i < spiritsObj.length; i++) {

        if(spiritsObj[i].quantity != 0) {
            if(spiritsObj[i].grade == 'rare') {
                const epic = spiritsObj[i];
    
                const div = document.createElement('div');
    
                div.style.background = `url('${spiritsObj[i].imgUrl}')`
                div.style.backgroundPosition = 'center';
                div.style.backgroundSize = 'cover';
        
                div.classList.add(epic.css, epic.grade, 'spirit');
    
                div.innerText = epic.quantity;
    
                slots[index].append(div);
    
                index++;
            }
        }
    }
    index = 0;

    addSpirit();

}

function displayUncommon() {
    const slots = allContainer.querySelectorAll('.slot');

    resetSlot();

    let index = 0;

    for(let i = 0; i < spiritsObj.length; i++) {

        if(spiritsObj[i].quantity != 0) {
            if(spiritsObj[i].grade == 'uncommon') {
                const uncommon = spiritsObj[i];
    
                const div = document.createElement('div');
    
                div.style.background = `url('${spiritsObj[i].imgUrl}')`
                div.style.backgroundPosition = 'center';
                div.style.backgroundSize = 'cover';
        
                div.classList.add(uncommon.css, uncommon.grade, 'spirit');
    
                div.innerText = uncommon.quantity;
    
                slots[index].append(div);
    
                index++;
            }
        }
    }
    index = 0;

    addSpirit();
}

function resetSlot() {
    const slots = allContainer.querySelectorAll('.slot');

    for(let i = 0; i < slots.length; i++) {

        const slot = slots[i];
        
        if(slot.firstElementChild) {
            slot.removeChild(slot.firstElementChild);
        }
    }
}

function addSpirit() {
    const spirits = allContainer.querySelectorAll('.spirit');
    
    for(let i = 0; i < spirits.length; i++) {
        const spirit = spirits[i];
        
        spirit.addEventListener('click', (e) => {
            if(aMoving != true) {
                const spiritCss = spirit.className.replace(/rare|epic|uncommon|spirit| /g, '');
            
                const obj = spiritsObj.find(spiritObj => spiritObj.css.includes(spiritCss));
                //ADD TO THE COMBINE CONTAINER
                const cSlots = combineContainer.querySelectorAll('.slot');
    
                //CREATE ELEMENT AND STYLE
                const div = document.createElement('div');
                const imgUrl = obj.imgUrl;
                const grade = obj.grade;
                div.style.background = `url(${imgUrl})`;
                div.style.backgroundPosition = 'center';
                div.style.backgroundSize = 'cover';
                div.classList.add(spiritCss, grade, 'spirit');
                for(let j = 0; j < cSlots.length; j++) {
                    const cSlot = cSlots[j];
                    
                    if(!cSlot.firstElementChild && cSlot.id == grade || cSlot.id == '') {
                        cSlot.append(div);
                        obj.quantity--;
    
                        break;
                    }
                } 
    
                updateCount();
                removeSpirit();
                rowIdentity();
                borderEffect();
            }
        })
    }
}

function removeSpirit() {
    const spirits = combineContainer.querySelectorAll('.spirit');

    for(let i = 0; i < spirits.length; i++) {
        const spirit = spirits[i];
        spirit.addEventListener('click', (e) => {
            if(moving != true) {
                e.stopImmediatePropagation();
                const spiritCss = spirit.className.replace(/rare|epic|uncommon|spirit| /g, '');
                const obj = spiritsObj.find(spiritObj => spiritObj.css.includes(spiritCss));
                obj.quantity++;
                updateCount();
    
                //DECIDE WHERE THE SLOT MUST BE PLACED
                const cSlots = combineContainer.querySelectorAll('.slot');
    
                spirit.parentElement.remove();
    
                const index = [...cSlots].indexOf(spirit.parentElement);
                const div = document.createElement('div');
                div.classList.add('slot');
                
                //TO ADD SLOT ON THE RESPECTIVE ROW
                const rows = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
    
                const closest = rows.filter(function(number) {return number > index;}), 
                close = closest[0];
                combineContainer.insertBefore(div, cSlots[close]);
                rowIdentity();
                borderEffect();
            }
        })
    }
}
//ADD BORDER EFFECT WHEN A FULL ROW OCCUPIED
const allSlots = document.querySelectorAll('.slot');

for(let i = 0; i < allSlots.length; i++) {
    allSlots[i].style.setProperty('--before', 'none');
    allSlots[i].style.setProperty('--after', 'none');
}

//THIS WILL ENABLE SHINING BORDER WHEN A FULL ROW IS OCCUPIED
function borderEffect() {
    const allSlots = document.querySelectorAll('.slot');
    const cSlots = combineContainer.querySelectorAll('.slot');
    const rows = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];

    for(let i = 0; i < allSlots.length; i++) {
        allSlots[i].style.setProperty('--before', 'none');
        allSlots[i].style.setProperty('--after', 'none');
    }

    for(let i = 0; i < rows.length; i++) {
        const fourth = cSlots[rows[i]];
        const third = cSlots[rows[i] - 1];
        const second = cSlots[rows[i] -2];
        const first = cSlots[rows[i] - 3];
        

        if(fourth.firstElementChild) {
            fourth.style.setProperty('--before', 'block');
            third.style.setProperty('--before', 'block');  
            second.style.setProperty('--before', 'block');
            first.style.setProperty('--before', 'block');

            fourth.style.setProperty('--after', 'block');
            third.style.setProperty('--after', 'block');  
            second.style.setProperty('--after', 'block');
            first.style.setProperty('--after', 'block');

            fourth.style.animationName = 'borderEffect';
            third.style.animationName = 'borderEffect';
            second.style.animationName = 'borderEffect';
            first.style.animationName = 'borderEffect';

            //TO APPEAR COVER NEXT TO A ROW
            const index = [...rows].indexOf(rows[i]);
            coverContainer.children[index].classList.add('cover-style');
        }

        if(!fourth.firstElementChild) {
            fourth.style.animationName = '';
            third.style.animationName = '';
            second.style.animationName = '';
            first.style.animationName = '';
        }
    }
    removeCover();
}

function removeCover() {
    const cSlots = combineContainer.querySelectorAll('.slot');
    const rows = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];

    for(let i = 0; i < rows.length; i++) {
        const row = cSlots[rows[i]];
        
        //TO REMOVE COVER NEXT TO A ROW
        if(!row.firstElementChild) {
            const index = [...rows].indexOf(rows[i]);
            coverContainer.children[index].classList.remove('cover-style');
        }
    }
}

function updateCount() {
    const tabGradeActive = document.querySelector('.tab-grade-active');
    const tabGradeLink = document.querySelectorAll('.tab-grade');

    const currentTab = [...tabGradeLink].indexOf(tabGradeActive);
    switch(currentTab) {
        case 0: displayAll(); break;
        case 1: displayEpic(); break;
        case 2: displayRare(); break;
        case 3: displayUncommon(); break;
    }
}

function rowIdentity() {
    //ADD ID TO EACH ROW THAT OCCUPIED
    const cSlots = combineContainer.querySelectorAll('.slot');

    
    for(let i = 0; i < cSlots.length / 4; i++) {
        const row = i * 4;
        const rowParent = cSlots[row];
        const rowChild = cSlots[row].firstElementChild;

        if(rowChild) {
            const spirit =rowChild;
            const grade = spirit.className.split(' ')[1];
            rowParent.id = grade;
            cSlots[row + 1].id = grade;
            cSlots[row + 2].id = grade;
            cSlots[row + 3].id = grade;
        }

        if(!rowChild) {
            rowParent.remove();
            cSlots[row + 1].remove();
            cSlots[row + 2].remove();
            cSlots[row + 3].remove();

            for(let i = 0; i < 4; i++) {
                const div = document.createElement('div');
                div.classList.add('slot');

                combineContainer.appendChild(div);
            }
        }
    }    
}

const autoBtn = document.querySelector('.auto-btn');

//I NEED TO DECLARE GLOBAL VARIABLES IN ORDER TO USE THEM IN DIFFERENT SCOPES
let eobjQuantity = 0;
let epicClicks = 0;

let robjQuantity = 0;
let rareClicks = 0;

let uobjQuantity = 0;
let uncommonClicks = 0;

let ready = true; //THIS IS TO PREVENT SPAM ON AUTO BUTTON

function repeatBorderEffect() {
    //TO REPEAT BORDER ANIMATION EVERYTIME AUTO BUTTON IS CLICKED
    const cSlots = combineContainer.querySelectorAll('.slot');
    const rows = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];

    for(let i = 0; i < rows.length; i++) {
        const fourth = cSlots[rows[i]];
        const third = cSlots[rows[i] - 1];
        const second = cSlots[rows[i] -2];
        const first = cSlots[rows[i] - 3];
        
        if(fourth.firstElementChild) {
            fourth.style.setProperty('--before', 'none');
            third.style.setProperty('--before', 'none');  
            second.style.setProperty('--before', 'none');
            first.style.setProperty('--before', 'none');

            fourth.style.setProperty('--after', 'none');
            third.style.setProperty('--after', 'none');  
            second.style.setProperty('--after', 'none');
            first.style.setProperty('--after', 'none');
        }
    }

    setTimeout(() => {
        borderEffect();
    },01)
}

let isFull = false; //USE TO STOP UNNECCESSARY CLICKS

autoBtn.addEventListener('click', () => { 
    if(ready) {
        autoBtn.addEventListener('click', repeatBorderEffect);

        const epicAdded = combineContainer.querySelectorAll('.epic');
        const rareAdded = combineContainer.querySelectorAll('.rare');
        const uncommonAdded = combineContainer.querySelectorAll('.uncommon');
    
        //EPIC
        const eobj = spiritsObj.filter(el => el.grade == 'epic')
    
        for(let i = 0; i < eobj.length; i++) {
            eobjQuantity += eobj[i].quantity;
        }

        if(eobjQuantity >= 40) {
            eobjQuantity = 40;
        }

        const epicRemainder = epicAdded.length % 4;
    
        if(epicRemainder == 0) {
            epicClicks = Math.floor(eobjQuantity / 4) * 4;
        }
    
        if(epicRemainder > 0) {
            epicClicks = Math.floor((eobjQuantity + epicRemainder) / 4) * 4 - epicRemainder;
        }
    
        //RARE
        const robj = spiritsObj.filter(el => el.grade == 'rare')
        
        for(let i = 0; i < robj.length; i++) {
            robjQuantity += robj[i].quantity;
        }
    
        if(robjQuantity >= 40) {
            robjQuantity = 40;
        }
    
        const rareRemainder = rareAdded.length % 4;
    
        if(rareRemainder == 0) {
            rareClicks = Math.floor(robjQuantity / 4) * 4;
        }
    
        if(rareRemainder > 0) {
            rareClicks = Math.floor((robjQuantity + rareRemainder) / 4) * 4 - rareRemainder;
        }
    
        //UNCOMMON
        const uobj = spiritsObj.filter(el => el.grade == 'uncommon')
        for(let i = 0; i < uobj.length; i++) {
            uobjQuantity += uobj[i].quantity;
        }
    
        if(uobjQuantity >= 40) {
            uobjQuantity = 40;
        }
    
        const uncommonRemainder = uncommonAdded.length % 4;
    
    
        if(uncommonRemainder == 0) {
            uncommonClicks = Math.floor(uobjQuantity / 4) * 4;
        }
    
        if(uncommonRemainder > 0) {
            uncommonClicks = Math.floor((uobjQuantity + uncommonRemainder) / 4) * 4 - uncommonRemainder;
        }
    
        //CHECK WHICH TAB IS CURRENTLY ON
        const tabGradeActive = document.querySelector('.tab-grade-active');
        const tabGradeLink = document.querySelectorAll('.tab-grade');
    
        const currentTab = [...tabGradeLink].indexOf(tabGradeActive);
    
        switch(currentTab) {
            case 0: 
                for(let i = 0; i < uncommonClicks; i++) {
                    const uncommon = allContainer.querySelectorAll('.uncommon');
                    if(uncommon[0]) {
                        uncommon[0].click();
                    }
                }
    
                for(let i = 0; i < rareClicks; i++) {
                    const rare = allContainer.querySelectorAll('.rare');
                    if(rare[0]) {
                        rare[0].click();
                    }
                }
    
                for(let i = 0; i < epicClicks; i++) {
                    const epic = allContainer.querySelectorAll('.epic');
                    if(epic[0]) {
                        epic[0].click();
                    }
                }
                break;
            case 1: 
                for(let i = 0; i < epicClicks; i++) {
                    const epic = allContainer.querySelectorAll('.epic');
                    if(epic[0]) {
                        epic[0].click();
                    }
                }
    
                break;
            case 2: 
                for(let i = 0; i < rareClicks; i++) {
                    const rare = allContainer.querySelectorAll('.rare');
                    if(rare[0]) {
                        rare[0].click();
                    }
                }
                break;
            case 3: 
                for(let i = 0; i < uncommonClicks; i++) {
                    const uncommon = allContainer.querySelectorAll('.uncommon');
                    if(uncommon[0]) {
                        uncommon[0].click();
                    }
                }
                break;
        }
        robjQuantity = 0;
        eobjQuantity = 0;
        uobjQuantity = 0;

        ready = false;
        setTimeout(() => {
            ready = true;
        },500)

    }
})

//SCROLL BY DRAGGING ON ALL CONTAINER
let aPos = {top: 0, y: 0};
let aMoving = false;

const mouseDownAll = function (e) {
    aPos = {
        top: allContainer.scrollTop,
        y: e.clientY
    }
    allContainer.addEventListener('mousemove', mouseMoveAll);
    document.addEventListener('mouseup', mouseUpAll);
}

const mouseMoveAll = function (e) {
    aMoving = true;
    const dy = e.clientY - aPos.y;

    allContainer.scrollTop = aPos.top - dy;
}

const mouseUpAll = function (e) {
    setTimeout(function() {
        aMoving = false;
    },100)

    allContainer.removeEventListener('mousemove', mouseMoveAll);
    document.removeEventListener('mouseup', mouseUpAll);
}

allContainer.addEventListener('mousedown', mouseDownAll )
document.addEventListener('mouseup', mouseUpAll);

/////////////////////////////////////////
//SCROLL BY DRAGGING ON COMBINE CONTAINER
let cPos = {top: 0, y: 0};
let moving = false;

const mouseDown = function (e) {
    cPos = {
        top: combineContainer.scrollTop,
        y: e.clientY
    }
    combineContainer.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

const mouseMove = function (e) {
    moving = true;
    const dy = e.clientY - cPos.y;

    combineContainer.scrollTop = cPos.top - dy;
}

const mouseUp = function () {
    setTimeout(function() {
        moving = false;
    },100)
    combineContainer.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}
combineContainer.addEventListener('mousedown', mouseDown )
document.addEventListener('mouseup', mouseUp);


//TO SCROLL COVER CONTAINER TOGETHER WITH COMBINE CONTAINER
combineContainer.addEventListener('scroll', () => {
    coverContainer.scrollTop = combineContainer.scrollTop;
})

//RESULT
const combineBtn = document.querySelector('.combine-btn');
const resultBox = document.querySelector('.bg-image');
const result = document.querySelector('.result');
const closeBtn = document.querySelector('.close-btn');
const viewAllBtn = document.querySelector('.view-all');

const circle = document.querySelector('.circle');

let grades = [];

//CHANCE
//SAVE INPUT IN LOCAL STORAGE
document.querySelector('.rare-chance').value = parseInt(localStorage.getItem('rc'));
document.querySelector('.epic-chance').value = parseInt(localStorage.getItem('ec'));
document.querySelector('.legendary-chance').value = parseInt(localStorage.getItem('lc'));

let rareChance = document.querySelector('.rare-chance').value;
let epicChance = document.querySelector('.epic-chance').value;
let legendaryChance = document.querySelector('.legendary-chance').value;

const inputChances = document.querySelectorAll('.input-chance');

inputChances.forEach(inputChance => {
    inputChance.addEventListener('keyup', updateChance)
    inputChance.addEventListener('change', updateChance)
})

function updateChance() {
    rareChance = document.querySelector('.rare-chance').value;
    epicChance = document.querySelector('.epic-chance').value;
    legendaryChance = document.querySelector('.legendary-chance').value;

    if(rareChance > 100) {
        document.querySelector('.rare-chance').value = 100;
    }
    
    if (rareChance < 0) {
        document.querySelector('.rare-chance').value = 0;
    }

    if (!rareChance || rareChance == '') {
        rareChance = 0;
    }

    if(epicChance > 100) {
        document.querySelector('.epic-chance').value = 100;
    }
    
    if (epicChance < 0) {
        document.querySelector('.epic-chance').value = 0;
    }

    if (!epicChance || epicChance == '') {
        epicChance = 0;
    }

    if(legendaryChance > 100) {
        document.querySelector('.legendary-chance').value = 100;
    }
    
    if (legendaryChance < 0) {
        document.querySelector('.legendary-chance').value = 0;
    }

    if (!legendaryChance || legendaryChance == '') {
        legendaryChance = 0;
    }

    localStorage.setItem('rc', rareChance)
    localStorage.setItem('ec', epicChance)
    localStorage.setItem('lc', legendaryChance)
}

//RESET CHANCE
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', () => {
    document.querySelector('.rare-chance').value = 10;
    document.querySelector('.epic-chance').value = 7;
    document.querySelector('.legendary-chance').value = 5;

    setDefaultChance();
})

//SET TO DEFAULT VALUE IF VALUES DOESNT EXIST IN LOCAL STORAGE
const rc = localStorage.getItem('rc');
const ec = localStorage.getItem('ec');
const lc = localStorage.getItem('lc');

if(!rc) {
    setDefaultChance();
}

if(!ec) {
    setDefaultChance();
}

if(!lc) {
    setDefaultChance();
}

function setDefaultChance() {
    localStorage.setItem('rc', 10);
    localStorage.setItem('ec', 7);
    localStorage.setItem('lc', 5);
}


combineBtn.addEventListener('click', () => {
    rareChance = parseInt(localStorage.getItem('rc'));
    epicChance = parseInt(localStorage.getItem('ec'));
    legendaryChance = parseInt(localStorage.getItem('lc'));

    //TO RECTIFY INPUT VALUES
    if(rareChance < 0) {
        rareChance = 0;
    }

    if(rareChance > 100) {
        rareChance = 100;
    }

    if(epicChance < 0) {
        epicChance = 0;
    }

    if(epicChance > 100) {
        epicChance = 100;
    }

    if(legendaryChance < 0) {
        legendaryChance = 0;
    }

    if(legendaryChance > 100) {
        legendaryChance = 100;
    }

    const cSlots = combineContainer.querySelectorAll('.slot');
    //WE ARE GOING TO GET THE NAME, GRADE SO WE WOULD KNOW WHAT SHOULD BE THE RESULT
    //ALSO CHECK HOW MANY ROWS CAN COMBINE

    const slots = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];

    for(let i = 0; i < slots.length; i++) {
        const slot = cSlots[slots[i]];
        const slotChild = slot.firstElementChild;
        
        if(slotChild) {
            circle.style.display = 'flex';

            setTimeout(() => {
                circle.style.display = 'none';
            },500)

            resultBox.style.display = 'flex';

            for(let i = 0; i < slots.length; i++) {
                const slot = cSlots[slots[i]];
                const slotChild = slot.firstElementChild;
               
                if(slotChild) {
                    //SAVE THE DETAILS
                    const css = slotChild.className.split(' ');
                    const grade = css[1];
        
                    grades.push(grade);
                }
        
                //TO REMOVE THE EXCESS SPIRITS
                if(!slotChild) {
                    const third = cSlots[slots[i] - 1].firstElementChild;
                    const second = cSlots[slots[i] - 2].firstElementChild;
                    const first = cSlots[slots[i] - 3].firstElementChild;
        
                    if(third) {
                        third.click();
                    }
        
                    if(second) {
                        second.click();
                    }
        
                    if(first) {
                        first.click();
                    }
                }
            }
        
            //CREATE SLOTS FOR RESULT
            for(let i = 0; i < grades.length; i++) {
                const div = document.createElement('div');
                div.classList.add('r-slot');
        
                result.appendChild(div);
            }
        
            const rSlots = result.querySelectorAll('.r-slot');
            const legendaryObj = spiritsObj.filter(spiritObj => spiritObj.grade == 'legendary');
            const epicObj = spiritsObj.filter(spiritObj => spiritObj.grade == 'epic');
            const rareObj = spiritsObj.filter(spiritObj => spiritObj.grade == 'rare');
            const uncommonObj = spiritsObj.filter(spiritObj => spiritObj.grade == 'uncommon');
        
            for(let i = 0; i < grades.length; i++) {
        
                //IF EPIC WAS USED TO COMBINE
                if(grades[i] == 'epic') {
                    const number =  Math.floor((Math.random() * 100) + 1);
                    
                    if(number <= legendaryChance) {
                        const pick = Math.floor((Math.random() * legendaryObj.length));
                        const objPicked = legendaryObj[pick];

                        const div = document.createElement('div');
                        div.style.background = `url('${objPicked.imgUrl}')`;
                        div.style.backgroundPosition = 'center';
                        div.style.backgroundSize = 'cover';
                        div.classList.add('random', 'legendary', 'r-spirit');
                        div.style.display = 'none';
                        
                        //FOR NAME
                        const span = document.createElement('span');
                        span.innerText = objPicked.name;
                        span.classList.add('spirit-name');
                        span.style.display = 'none';
                        
                        for(let j = 0; j < rSlots.length; j++) {
                            if(!rSlots[j].firstElementChild) {
                                rSlots[j].appendChild(div);
                                rSlots[j].appendChild(span);
                                break;
                            }
                        }
                    }
        
                    if(number > legendaryChance) {
                        const pick = Math.floor((Math.random() * epicObj.length));
                        const objPicked = epicObj[pick];
        
                        //USER OBTAINED THIS SO WE JUST NEED TO ADD 1 TO ITS QUANTITY
                        objPicked.quantity+=1;
                        const div = document.createElement('div');
                        div.style.background = `url('${objPicked.imgUrl}')`;
                        div.style.backgroundPosition = 'center';
                        div.style.backgroundSize = 'cover';
                        div.classList.add(objPicked.css, objPicked.grade, 'r-spirit');
                        div.style.display = 'none';
            
                        //FOR NAME
                        const span = document.createElement('span');
                        span.innerText = objPicked.name;
                        span.classList.add('spirit-name');
                        span.style.display = 'none';
                        
                        for(let j = 0; j < rSlots.length; j++) {
                            if(!rSlots[j].firstElementChild) {
                                rSlots[j].appendChild(div);
                                rSlots[j].appendChild(span);
                                break;
                            }
                        }
                    }
                }

                //IF RARE WAS USED TO COMBINE
                if(grades[i] == 'rare') {
                    const number =  Math.floor((Math.random() * 100) + 1);
        
                    if(number <= epicChance) { // number <= 70
                        const pick = Math.floor((Math.random() * epicObj.length));
                        const objPicked = epicObj[pick];
        
                        //USER OBTAINED THIS SO WE JUST NEED TO ADD 1 TO ITS QUANTITY
                        objPicked.quantity+=1;
                        const div = document.createElement('div');
                        div.style.background = `url('${objPicked.imgUrl}')`;
                        div.style.backgroundPosition = 'center';
                        div.style.backgroundSize = 'cover';
                        div.classList.add(objPicked.css, objPicked.grade, 'r-spirit');
                        div.style.display = 'none';
            
                        //FOR NAME
                        const span = document.createElement('span');
                        span.innerText = objPicked.name;
                        span.classList.add('spirit-name');
                        span.style.display = 'none';
                        
                        for(let j = 0; j < rSlots.length; j++) {
                            if(!rSlots[j].firstElementChild) {
                                rSlots[j].appendChild(div);
                                rSlots[j].appendChild(span);
                                break;
                            }
                        }
                    }
        
                    if(number > epicChance) { //number > 70
                        const pick = Math.floor((Math.random() * rareObj.length));
                        const objPicked = rareObj[pick];
                        
                        //USER OBTAINED THIS SO WE JUST NEED TO ADD 1 TO ITS QUANTITY
                        objPicked.quantity+=1;
                        const div = document.createElement('div');
                        div.style.background = `url('${objPicked.imgUrl}')`;
                        div.style.backgroundPosition = 'center';
                        div.style.backgroundSize = 'cover';
                        div.classList.add(objPicked.css, objPicked.grade, 'r-spirit');
                        div.style.display = 'none';
            
                        //FOR NAME
                        const span = document.createElement('span');
                        span.innerText = objPicked.name;
                        span.classList.add('spirit-name');
                        span.style.display = 'none';
                        
                        for(let j = 0; j < rSlots.length; j++) {
                            if(!rSlots[j].firstElementChild) {
                                rSlots[j].appendChild(div);
                                rSlots[j].appendChild(span);
                                break;
                            }
                        }
                    }
                }
                
                //IF UNCOMMON WAS USED TO COMBINE
                if(grades[i] == 'uncommon') {
                    const number =  Math.floor((Math.random() * 100) + 1);
        
                    if(number <= rareChance) { 
                        const pick = Math.floor((Math.random() * rareObj.length));
                        const objPicked = rareObj[pick];
        
                        //USER OBTAINED THIS SO WE JUST NEED TO ADD 1 TO ITS QUANTITY
                        objPicked.quantity+=1;
                        const div = document.createElement('div');
                        div.style.background = `url('${objPicked.imgUrl}')`;
                        div.style.backgroundPosition = 'center';
                        div.style.backgroundSize = 'cover';
                        div.classList.add(objPicked.css, objPicked.grade, 'r-spirit');
                        div.style.display = 'none';
            
                        //FOR NAME
                        const span = document.createElement('span');
                        span.innerText = objPicked.name;
                        span.classList.add('spirit-name');
                        span.style.display = 'none';
                        
                        for(let j = 0; j < rSlots.length; j++) {
                            if(!rSlots[j].firstElementChild) {
                                rSlots[j].appendChild(div);
                                rSlots[j].appendChild(span);
                                break;
                            }
                        }
                    }
        
                    if(number > rareChance) {//
                        const pick = Math.floor((Math.random() * uncommonObj.length));
                        const objPicked = uncommonObj[pick];
                        
                        //USER OBTAINED THIS SO WE JUST NEED TO ADD 1 TO ITS QUANTITY
                        objPicked.quantity+=1;
                        const div = document.createElement('div');
                        div.style.background = `url('${objPicked.imgUrl}')`;
                        div.style.backgroundPosition = 'center';
                        div.style.backgroundSize = 'cover';
                        div.classList.add(objPicked.css, objPicked.grade, 'r-spirit');
                        div.style.display = 'none';
            
                        //FOR NAME
                        const span = document.createElement('span');
                        span.innerText = objPicked.name;
                        span.classList.add('spirit-name');
                        span.style.display = 'none';
                        
                        for(let j = 0; j < rSlots.length; j++) {
                            if(!rSlots[j].firstElementChild) {
                                rSlots[j].appendChild(div);
                                rSlots[j].appendChild(span);
                                break;
                            }
                        }
                    }
                }
            }
            updateCount();

            // DELETE ALL THE SPIRITS FROM COMBINE CONTAINER
            for(let i = 0; i < cSlots.length; i++) {
                const slot = cSlots[i];
                const slotChild = slot.firstElementChild;

                if(slotChild) {
                    slotChild.remove();
                }
            }
            showAnimation();
            borderEffect();
        }
    }
})

let anIndex = 0;
let anInterval;

let totalR = 0;
let totalE = 0;
let totalL = 0;

let triggered = false;


function showAnimation() {
    const spirits = result.querySelectorAll('.r-spirit');
    const spans = result.querySelectorAll('.spirit-name');
    const blocker = document.querySelector('.blocker');

    const cSlots = combineContainer.querySelectorAll('.slot');
    const slots = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];

    anInterval = setInterval(myInterval, 100);

    function myInterval() {
        blocker.style.display = 'flex';
        //TO CHECK IF WE SHOULD PUT A COVERING ON SPIRIT
        const grade = cSlots[slots[anIndex]].id;

        if(grade == 'epic') { //IF EPIC IS USED
            const isRare = spirits[anIndex].className;
            const css = isRare.split(' ')[1];

            clearInterval(anInterval);
            countDown(myInterval, anIndex, grade);
            
            spirits[anIndex].style.animation = '';
            const div = document.createElement('div');
            const anotherDiv = document.createElement('div');

            div.classList.add('bg-light');
            anotherDiv.classList.add('light');

            spirits[anIndex].parentElement.appendChild(div);    
            spirits[anIndex].parentElement.appendChild(anotherDiv);   

            if(css == 'legendary') { //IF LEGENDARY WOULD BE THE RESULT
                totalL++;
                spirits[anIndex].style.animation = '';
                
                const img = document.createElement('img');
                img.style.width = '100%';
                img.style.height = '100%';
                spirits[anIndex].appendChild(img);
                
                const div = document.createElement('div');
                const anotherDiv = document.createElement('div');

                div.classList.add('bg-light');
                anotherDiv.classList.add('light');

                spirits[anIndex].parentElement.appendChild(div);    
                spirits[anIndex].parentElement.appendChild(anotherDiv);      
                
                const savePos = spirits[anIndex];
                const pos = [...spirits].indexOf(savePos);

                //THIS   FIX THE BUG
                img.addEventListener('click', (e) => {
                    e.stopImmediatePropagation();
                })
                
                setTimeout(() => {
                    img.src = 'images/cover.jpg';
                    img.classList.add('cover')
                },1500)
                savePos.addEventListener('click', (e) => {
                    totalL--;
                    const target = e.target;
                    target.style.animation = 'legendaryFlip 3s forwards ease-in'; 
                    target.style.pointerEvents = 'none';

                    setTimeout(() => {
                        target.firstElementChild?.remove();
                        target.parentElement.style.transform = 'scale(-1,1)';
                    },2000)

                    //LET THE FLIP ANIMATION FINISH FIRST BEFORE DELETING
                   
                    const splash = document.createElement('div');
                    splash.classList.add('lg-light');

                    target.appendChild(splash);

                    setTimeout(() => {
                        splash.style.display = 'none';
                        setTimeout(() => {
                            splash.style.display = 'flex';
                        }, 50) 
                    },2000)

                    setTimeout(() => {
                        target.style.animation = 'specialLight 2s infinite ease alternate'
                        target.parentElement.style.transform = 'scale(1,1)'
                        spans[pos].style.display = 'flex';
                        spans[pos].style.transform = 'scale(1,1)'
                    },3000)

                    //MAKE CLOSE BUTTON APPEAR WHEN ALL COVER IS OPENED OR REMOVED
                    if(totalE == 0 && totalR == 0 && totalL == 0) {
                        setTimeout(() => {
                            closeResult();
                        },4000)
                    }
                })
            }
        }

        //IF RARE IS USED TO COMBINE THEN WE ARE GOING TO PUT COVERING ON IT
        if(grade == 'rare') { //IF RARE IS USED
            const isRare = spirits[anIndex].className;
            const css = isRare.split(' ')[1];

            if(css == 'epic') { //IF EPIC WOULD BE THE RESULT
                totalE++;
                clearInterval(anInterval)
                spirits[anIndex].style.animation = '';
                
                countDown(myInterval, anIndex, grade);
                
                const img = document.createElement('img');
                img.style.width = '100%';
                img.style.height = '100%';
                spirits[anIndex].appendChild(img);
                
                const div = document.createElement('div');
                const anotherDiv = document.createElement('div');

                div.classList.add('bg-light');
                anotherDiv.classList.add('light');

                spirits[anIndex].parentElement.appendChild(div);    
                spirits[anIndex].parentElement.appendChild(anotherDiv);    
                
                
                const savePos = spirits[anIndex];
                const pos = [...spirits].indexOf(savePos);
                
                setTimeout(() => {
                    img.src = 'images/cover.jpg';
                    img.classList.add('cover')
                }, 1500) 

                savePos.addEventListener('click', (e) => {
                    totalE--;
                    const target = e.target;
                    target.style.animation = 'flip 1.5s forwards'; 
                    target.style.pointerEvents = 'none';

                    const splash = document.createElement('div');
                    splash.classList.add('splash');

                    const anotherSplash = document.createElement('div');
                    anotherSplash.classList.add('lg-light');

                    target.appendChild(anotherSplash);

                    setTimeout(() => {
                        target.firstElementChild?.remove();
                        target.parentElement.style.transform = 'scale(-1,1)';
                        target.appendChild(splash);
                    },300)
                   
                    //LET THE FLIP ANIMATION FINISH FIRST BEFORE DELETING
                   
                    setTimeout(() => {
                        target.style.animation = 'epicLight 1s infinite ease alternate'
                        target.parentElement.style.transform = 'scale(1,1)'
                        spans[pos].style.display = 'flex';
                        spans[pos].style.transform = 'scale(1,1)'
                    },1000)

                    //MAKE CLOSE BUTTON APPEAR WHEN ALL COVER IS OPENED OR REMOVED
                    if(totalE == 0 && totalR == 0 && totalL == 0) {
                        setTimeout(() => {
                            closeResult();
                        },1500)
                    }
                })
            }
        }

        // IF UNCOMMON IS USED TO COMBINE THEN WE ARE GOING TO PUT COVERING ON IT IF THE RESULT IS RARE
        if(grade == 'uncommon') {
            const isRare = spirits[anIndex].className;
            const css = isRare.split(' ')[1];
            
            if(css == 'rare') {
                totalR++;
                const img = document.createElement('img');
                img.src = 'images/cover.jpg';
                img.style.width = '100%';
                img.style.height = '100%';
                spirits[anIndex].appendChild(img);

                img.classList.add('cover');

                spans[anIndex].style.visibility = 'hidden';

                const savePos = spirits[anIndex];

                savePos.addEventListener('click', (e) => {
                    totalR--;
                    const pos = [...spirits].indexOf(savePos);
                
                    setTimeout(() => {
                        spans[pos].style.visibility = 'visible';
                    },200)
                    
                    const target = e.target;
                    target.style.pointerEvents = 'none';
                    target.style.display = 'none';

                    setTimeout(() => {
                        target.style.display = 'flex';
                    },10)

                    target.classList.add('unclickable');

                    target.firstElementChild?.remove();


                    //MAKE CLOSE BUTTON APPEAR WHEN ALL COVER IS OPENED OR REMOVED
                    if(totalR == 0 && totalE == 0 && totalL == 0) {
                        closeResult();
                    }

                    setTimeout(() => {
                        savePos.style.animation = '';
                    },2000)

                })
            }
        }

        const isRare = spirits[anIndex].className;
        const css = isRare.split(' ')[1];

        if(css == 'rare' ||css == 'uncommon') {
            spirits[anIndex].style.display = 'flex';
            spans[anIndex].style.display = 'flex';
        }
        anIndex++;
        //THE LOOP ENDS HERE
        if(anIndex == spirits.length) {
            clearInterval(anInterval);
            blocker.style.display = 'none';
            anIndex = 0;

            const lastGrade = spirits[spirits.length - 1].className.split(' ')[1];

            if(totalR == 0 && totalE == 0 && totalL == 0) {
                if(lastGrade == 'epic' || lastGrade == 'legendary') {
                    if(triggered != true) {
                        triggered = true;
                        setTimeout(() => {
                            closeResult();
                        },2000)
                    }
                }

                if(lastGrade == 'rare' || lastGrade == 'uncommon') {
                    closeResult();
                }
            }

            if(totalR > 0) {
                if(totalE > 0 || totalL > 0) {
                    
                }else {
                    viewAll();
                }
            }

            //ONCE COMBINED THE ROW ID'S WILL SET TO NULL
            for(let i = 0; i < cSlots.length; i++) {
                const slot = cSlots[i];
    
                if(slot) {
                    slot.id = '';
                }
            }
            
        } 
    }
}

function viewAll() {
    closeBtn.style.display = 'none';
    viewAllBtn.style.display = 'flex';

    viewAllBtn.addEventListener('click', () => {
        const spirits = result.querySelectorAll('.r-spirit');

        for(let i = 0; i < spirits.length; i++) {
            if(!spirits[i].className.includes('unclickable')) {
                spirits[i].click();
            }
        }
        closeResult();
    })
}

function closeResult() {
    const rSlots = result.querySelectorAll('.r-slot');
    viewAllBtn.style.display = 'none';
    closeBtn.style.display = 'flex';

    closeBtn.addEventListener('click', () => {
        resultBox.style.display = 'none';
        closeBtn.style.display = 'none';

        grades = [];

        for(let i = 0; i < rSlots.length; i++) {
            rSlots[i].remove();
        } 

        totalR = 0;
        totalE = 0;
        totalL = 0;

        triggered = false;
    })
   
}

function countDown(myInterval, anIndex, grade) {
    const spirits = result.querySelectorAll('.r-spirit');
    const spans = result.querySelectorAll('.spirit-name');

    setTimeout(() => {
       
        setTimeout(() => {
            spirits[anIndex].style.display = 'flex';
            if(spirits[anIndex].className.split(' ')[1] == 'epic' && grade == 'epic') {
                spans[anIndex].style.display = 'flex';
            }
        },50)

        const bgLight = result.querySelector('.bgLight');
        const light = result.querySelector('.light');

        if(bgLight) {
            bgLight.remove();
        }

        if(light) {
            light.remove();
        }

        anInterval = setInterval(myInterval, 100);

    },1500) // COUNTS 1.5s BEFORE THE INTERVAL CONTINUES...
}

