// =========================================
// ARRAY DE USUARIOS
// =========================================

const usuarios = [

    {"id":1,"first_name":"Danika","last_name":"Earie","bank":"COLUMBIA STATE BANK","city":"Villa Carlos Paz","country":"Argentina","salary":5729,"expenses":6466},
    {"id":2,"first_name":"Sibylla","last_name":"Camili","bank":"AMERIS BANK","city":"Boksitogorsk","country":"Russia","salary":3080,"expenses":3969},
    {"id":3,"first_name":"Egon","last_name":"O'Neill","bank":"BANCA GENERALI - SOCIETA' PER AZIONI (IN FORMA ABBREVIATA GENERBANCA)","city":"Kashar","country":"Albania","salary":3721,"expenses":4831},
    {"id":4,"first_name":"Mahmud","last_name":"Yitzhak","bank":"Tower Credit Union Limited","city":"Yelenendorf","country":"Azerbaijan","salary":5500,"expenses":1634},
    {"id":5,"first_name":"Violet","last_name":"Stoller","bank":"Caisse régionale de crédit agricole mutuel Normandie-Seine","city":"Wushi","country":"China","salary":9156,"expenses":1160},
    {"id":6,"first_name":"Matthaeus","last_name":"Carmen","bank":"Sparkasse Lambach Bank Aktiengesellschaft","city":"Yylanly","country":"Turkmenistan","salary":7848,"expenses":1823},
    {"id":7,"first_name":"Consolata","last_name":"Gerg","bank":"CREDIT UNION OF SOUTHERN CALIFORNIA","city":"General Alvear","country":"Argentina","salary":6842,"expenses":1182},
    {"id":8,"first_name":"Petey","last_name":"Cotterell","bank":"Crédit Agricole S.A.","city":"Reutov","country":"Russia","salary":5726,"expenses":6241},
    {"id":9,"first_name":"Glenn","last_name":"Nowak","bank":"Ignalinos kredito unija","city":"Mafang","country":"China","salary":6986,"expenses":5695},
    {"id":10,"first_name":"Saunders","last_name":"O'Dee","bank":"Banca Popolare Etica Società Cooperativa per Azioni, Sucursal en España","city":"Yishan","country":"China","salary":8808,"expenses":6548},
    {"id":11,"first_name":"Merlina","last_name":"Paling","bank":"Eurobank Private Bank Luxembourg S.A.","city":"Reni","country":"Ukraine","salary":5275,"expenses":3655},
    {"id":12,"first_name":"Madonna","last_name":"Badham","bank":"Goyer & Göppel KG","city":"Addis Ababa","country":"Ethiopia","salary":3542,"expenses":6665},
    {"id":13,"first_name":"Jody","last_name":"Dukesbury","bank":"BANCA TRANSILVANIA S.A.","city":"Santo Domingo de los Colorados","country":"Ecuador","salary":3245,"expenses":4429},
    {"id":14,"first_name":"Hymie","last_name":"Huggons","bank":"REGIONS BANK","city":"Chojna","country":"Poland","salary":6240,"expenses":3991},
    {"id":15,"first_name":"Gussie","last_name":"Cankett","bank":"SELF-HELP CREDIT UNION","city":"Yakutsk","country":"Russia","salary":4765,"expenses":1632},
    {"id":16,"first_name":"Fina","last_name":"Van Arsdale","bank":"Banque Delubac et Cie","city":"Miatli","country":"Russia","salary":2428,"expenses":3916},
    {"id":17,"first_name":"Sansone","last_name":"McIlhatton","bank":"VALLEY NATIONAL BANK","city":"Volgograd","country":"Russia","salary":3547,"expenses":4394},
    {"id":18,"first_name":"Jim","last_name":"D'Onise","bank":"Raiffeisenbank Uehlfeld-Dachsbach eG","city":"Al Khārijah","country":"Egypt","salary":7549,"expenses":6659},
    {"id":19,"first_name":"Ignace","last_name":"McNee","bank":"BMO HARRIS BANK","city":"Sakata","country":"Japan","salary":8241,"expenses":3076},
    {"id":20,"first_name":"Dede","last_name":"Ismay","bank":"Volksbank eG","city":"Saki","country":"Nigeria","salary":7249,"expenses":6869},
    {"id":21,"first_name":"Ban","last_name":"Snoxall","bank":"Raiffeisenbank Oberaudorf eG","city":"Mangulile","country":"Honduras","salary":2153,"expenses":3202},
    {"id":22,"first_name":"Brander","last_name":"Foxall","bank":"FIRST STATE BANK","city":"Łaziska Górne","country":"Poland","salary":5592,"expenses":3433},
    {"id":23,"first_name":"Lizbeth","last_name":"Joincey","bank":"CASSA DI RISPARMIO DI VOLTERRA S.P.A.","city":"Indaiatuba","country":"Brazil","salary":7397,"expenses":4213},
    {"id":24,"first_name":"Melinde","last_name":"Gaukroger","bank":"Frankfurter Bankgesellschaft (Deutschland) AG","city":"Smålandsstenar","country":"Sweden","salary":3005,"expenses":3349},
    {"id":25,"first_name":"Erastus","last_name":"Humpherson","bank":"GLACIER BANK","city":"Santa Cruz","country":"Mexico","salary":3323,"expenses":3033},
    {"id":26,"first_name":"Eugenio","last_name":"Kenset","bank":"DEUTSCHE BANK AKTIENGESELLSCHAFT","city":"Czarna Woda","country":"Poland","salary":6900,"expenses":6652},
    {"id":27,"first_name":"Travus","last_name":"Sotheron","bank":"Volksbank Wißmar eG","city":"Baimiao","country":"China","salary":6347,"expenses":6065},
    {"id":28,"first_name":"Kleon","last_name":"Fursse","bank":"Volksbank Rhein-Lippe eG","city":"Baoxing","country":"China","salary":2527,"expenses":6588},
    {"id":29,"first_name":"Katlin","last_name":"Dilnot","bank":"Raiffeisenbank Kundl-Münster eGen","city":"Dalam","country":"Indonesia","salary":8048,"expenses":2048},
    {"id":30,"first_name":"Sky","last_name":"Axell","bank":"Raiffeisenbank Hausmannstätten eGen","city":"Komsomolets","country":"Russia","salary":2147,"expenses":2837},
    {"id":31,"first_name":"Tiertza","last_name":"Wealthall","bank":"MUFG UNION BANK","city":"Nový Bydžov","country":"Czech Republic","salary":5043,"expenses":4585},
    {"id":32,"first_name":"Cherry","last_name":"Korneev","bank":"Triodos Bank N.V.","city":"Huidong","country":"China","salary":7366,"expenses":2977},
    {"id":33,"first_name":"Morgan","last_name":"Judd","bank":"Volksbank Viersen e G","city":"Tamaulipas","country":"Mexico","salary":5310,"expenses":4822},
    {"id":34,"first_name":"Lydia","last_name":"Banner","bank":"FIRST NATIONAL BANK","city":"Yukuriawat","country":"China","salary":8762,"expenses":3385},
    {"id":35,"first_name":"Avigdor","last_name":"Poytheras","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Xishiqiao","country":"China","salary":5644,"expenses":2810},
    {"id":36,"first_name":"Dulsea","last_name":"Seavers","bank":"FIRST COMMUNITY BANK","city":"Xianning","country":"China","salary":8396,"expenses":5296},
    {"id":37,"first_name":"Basilio","last_name":"Weerdenburg","bank":"Sparkasse Bayreuth","city":"Kanungu","country":"Uganda","salary":7610,"expenses":1504},
    {"id":38,"first_name":"Nels","last_name":"Bolmann","bank":"FIRST FINANCIAL BANK","city":"Tari","country":"Papua New Guinea","salary":7706,"expenses":2991},
    {"id":39,"first_name":"Eldin","last_name":"Search","bank":"State Bank of India","city":"Nanzhang Chengguanzhen","country":"China","salary":8612,"expenses":2096},
    {"id":40,"first_name":"Noreen","last_name":"Joul","bank":"Raiffeisenbank Wals-Himmelreich eGen","city":"Bagumbayan","country":"Philippines","salary":5160,"expenses":6511},
    {"id":41,"first_name":"Ciro","last_name":"Genever","bank":"CITIZENS BANK","city":"Khvalynsk","country":"Russia","salary":3055,"expenses":3874},
    {"id":42,"first_name":"Tiffy","last_name":"Surgey","bank":"HSBC BANK","city":"Ziyuan","country":"China","salary":9207,"expenses":2823},
    {"id":43,"first_name":"Zea","last_name":"Synder","bank":"COMMUNITY NATIONAL BANK","city":"Żelistrzewo","country":"Poland","salary":3620,"expenses":1413},
    {"id":44,"first_name":"Issiah","last_name":"Hellyer","bank":"Cabra Credit Union Limited","city":"Shiye","country":"China","salary":8535,"expenses":5532},
    {"id":45,"first_name":"Lark","last_name":"Payton","bank":"BANK OF AMERICA","city":"Ajaccio","country":"France","salary":3918,"expenses":6559},
    {"id":46,"first_name":"Moshe","last_name":"McKechnie","bank":"CAPITAL ONE","city":"Palauig","country":"Philippines","salary":9234,"expenses":5411},
    {"id":47,"first_name":"Neda","last_name":"Harmar","bank":"Raiffeisen Bank International AG","city":"Maanĭt","country":"Mongolia","salary":9556,"expenses":5912},
    {"id":48,"first_name":"Jobi","last_name":"Flipsen","bank":"BANCA DI CREDITO COOPERATIVO DI ARBOREA - SOCIETA' COOPERATIVA","city":"Pokrovskoye","country":"Russia","salary":4062,"expenses":3399},
    {"id":49,"first_name":"Joannes","last_name":"Bramhall","bank":"FIRST MERCHANTS BANK","city":"Majia","country":"China","salary":9916,"expenses":1842},
    {"id":50,"first_name":"Aimil","last_name":"Corkell","bank":"Société générale private banking (Monaco)","city":"Tyukalinsk","country":"Russia","salary":7710,"expenses":3345}

];


// =========================================
// FUNCION PARA CALCULAR AHORRO
// =========================================

function calcularAhorro(usuario) {
    return usuario.salary - usuario.expenses;
}


// =========================================
// 1 - FUNCION DE BALANCE MENSUAL
// =========================================

function balanceMensual(idUsuario) {

    const usuario = usuarios.find(u => u.id === idUsuario);

    if (!usuario) {

        console.warn("Usuario no encontrado");
        return;

    }

    const ahorro = calcularAhorro(usuario);

    return {

        nombre: `${usuario.first_name} ${usuario.last_name}`,
        banco: usuario.bank,
        ahorro: ahorro

    };
}


// =========================================
// PEDIR USUARIO POR PROMPT
// =========================================

let idBuscado = parseInt(prompt("Ingresa el ID del usuario"));

const resultadoBalance = balanceMensual(idBuscado);

console.log("----------------------------------");
console.log("BALANCE MENSUAL");
console.log(resultadoBalance);
console.log("----------------------------------");


// =========================================
// 2 - CLASIFICACION FINANCIERA
// =========================================

function clasificarAhorro(ahorro) {

    return ahorro < 500
    
        ? "Ahorro bajo"
        : ahorro <= 1500
        ? "Ahorro medio"
        : "Ahorro alto";
}


// =========================================
// MOSTRAR CLASIFICACION DE CADA USUARIO
// =========================================

console.log("----------------------------------");
console.log("CLASIFICACION FINANCIERA");
console.log("----------------------------------");

usuarios.forEach(usuario => {
    const ahorro = calcularAhorro(usuario);

    console.log(
        `${usuario.first_name} ${usuario.last_name}: ${clasificarAhorro(ahorro)}`
    );

});


// =========================================
// 3 - AHORRO TOTAL POR BANCO
// =========================================

function agruparPorBanco(listaUsuarios) {

    const bancos = {};

    listaUsuarios.forEach(usuario => {

        const ahorro = calcularAhorro(usuario);

        if (!bancos[usuario.bank]) {

            bancos[usuario.bank] = {

                bank: usuario.bank,
                cantidadUsuarios: 0,
                ahorroTotal: 0

            };

        }

        bancos[usuario.bank].cantidadUsuarios++;
        bancos[usuario.bank].ahorroTotal += ahorro;

    });

    return Object.values(bancos);

}


// =========================================
// MOSTRAR AHORRO POR BANCO
// =========================================

console.log("----------------------------------");
console.log("AHORRO TOTAL POR BANCO");
console.log("----------------------------------");

console.log(agruparPorBanco(usuarios));

// =========================================
// 4 - AHORRO TOTAL POR PAIS
// =========================================

function agruparPorPais(listaUsuarios) {

    const paises = {};

    listaUsuarios.forEach(usuario => {

        const ahorro = calcularAhorro(usuario);

        if (!paises[usuario.country]) {

            paises[usuario.country] = {

                country: usuario.country,
                cantidadUsuarios: 0,
                ahorroTotal: 0

            };

        }

        paises[usuario.country].cantidadUsuarios++;
        paises[usuario.country].ahorroTotal += ahorro;

    });

    return Object.values(paises);

}


// =========================================
// MOSTRAR AHORRO POR PAIS
// =========================================

console.log("----------------------------------");
console.log("AHORRO TOTAL POR PAIS");
console.log("----------------------------------");

console.log(agruparPorPais(usuarios));