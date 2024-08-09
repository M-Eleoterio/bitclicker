let bitcoin = 0;
let autoClick = 0;
let autoClickPrice = 60;
let perClick = 1;
let perClickPrice = 50;

const menuInterval = setInterval(() => {
    $("#bitcoin-counter").html(`₿${bitcoin}`);
    $("#perclickprice").html(`₿${perClickPrice}`);
    $("#autoclickprice").html(`₿${autoClickPrice}`);
}, 16);

const gameInterval = setInterval(() => {
    bitcoin += autoClick;
}, 1000);


// cliques
$("#clickplus").on('click', () => {
    if (bitcoin >= perClickPrice) {
        perClick++;
        bitcoin -= perClickPrice;
        perClickPrice += 10;
        addConsoleMsg(`Agora você ganha ₿${perClick} por clique!`)
    } else {
        addConsoleMsg("Você não tem bitcoins o suficiente.")
    }
})
$("#automine").on('click', () => {
    if (bitcoin >= autoClickPrice) {
        autoClick++;
        bitcoin -= autoClickPrice;
        autoClickPrice += 10;
        addConsoleMsg(`Agora você ganha ₿${autoClick} por segundo!`)
    } else {
        addConsoleMsg("Você não tem bitcoins o suficiente.")
    }
})

$("#secret").on("click", () => {
    if (bitcoin >= '500') {
        bitcoin-= 500;
        const cinasIcon = $("#bitcoin-icon").attr('src','img/cinas.png');
        cinasIcon.css('width', '520px')
        cinasIcon.css('border-radius', '50%')
        document.title = "૮ ˶ᵔ ᵕ ᵔ˶ ა Cinas Clicker"
        addConsoleMsg(`
            <br>
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠾⠛⠛⠉⠉⠉⠉⠉⠛⠻⠶⣤⣀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣤⡾⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣯⠉⠙⠻⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠟⢀⣼⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠋⠀⠀⠘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣦⡀⠀⠀⠈⠙⠷⣦⣤⣄⣠⣤⣤⣤⣤⣄⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣶⣄⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠈⠉⠻⣦⡀⠀
⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⠀⢠⡾⠂⠀⠀⢀⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⡿⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀
⠀⠀⠀⢀⣴⠟⠁⠀⣀⣤⠶⠞⠛⠻⠶⣤⡀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢠⡀⠀⠀⠀⢤⣶⢻⡟⣶⢠⡿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃
⠀⠀⢠⡟⠁⠀⢠⡾⠋⠀⠀⠀⠀⠀⠀⠈⢿⣌⣛⡋⠀⠀⠀⠸⢧⡴⠛⠓⠞⠁⠀⠀⠀⠈⠛⠛⢈⣥⠟⠁⠈⠻⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⠏⠀
⠀⠀⣾⠁⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡽⠟⠀⠀⠀⠀⠀⢀⣤⣤⣴⣤⣄⣀⣤⣤⠶⠞⠛⠁⠀⠀⠀⠀⠀⠉⠛⠶⢦⣤⣤⣤⣤⣤⡶⠾⠋⠁⠀⠀
⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣏⣀⣀⣀⣀⣤⣤⣴⡟⠁⠘⣧⠀⠙⠻⠋⠛⣧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠻⣦⡀⠀⠀⠀⠀⠀⠀⢀⣠⣴⠿⢋⣩⣽⠿⣯⣽⡇⠸⠋⠀⠀⣸⡟⠷⣤⡀⠀⠀⠈⠻⣆⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠙⠛⠶⠶⠶⠚⠛⠋⠉⠀⣰⡟⠉⢀⡀⠀⣿⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀⣰⠟⠉⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⣿⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣧⠀⠀⠘⠷⣤⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣧⣀⣀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣦⡀⠀⠀⠀⢈⣻⢦⣄⣀⣀⠀⢠⣴⣶⠞⠛⠉⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠛⠁⠀⠈⠛⢷⣤⣤⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `)
    } else {
        addConsoleMsg("Você não tem bitcoins o suficiente.")
    }
    
});
function onClick() {
    bitcoin += perClick;
}

function addConsoleMsg(msg) {
    const consoleMsg = $("<p>").attr('class', 'console-line').html('r00t_cr4ck3r@bitclicker:~$ ' + msg);
    $("#console-log").append(consoleMsg);
}




//