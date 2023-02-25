const btns = Array.from(document.querySelectorAll('button')); 
let p1 = document.getElementById('p1'); 
let p2 = document.getElementById('p2'); 

let fr1 = `Notre mission est de fournir un langage précis et fiable
des services de traduction qui comblent le fossé de la communication
entre des personnes d'origines culturelles différentes. Nous nous efforçons
offrir un service client et une qualité exceptionnels
des traductions qui permettent à nos clients de
communiquer leur message dans n'importe quelle langue.`;

let fr2 = `Notre engagement à
l'excellence et le souci du détail garantissent que chaque
la traduction transmet fidèlement le sens voulu et
nuances culturelles. Nous sommes dédiés à l'autonomisation des entreprises
et les individus pour étendre leur portée et faire un effet positif
impact mondial grâce à une communication efficace.`

let span1 = `Nuestra misión es proporcionar un lenguaje preciso y confiable.
servicios de traducción que cierran la brecha de comunicación
entre personas de diferentes orígenes culturales. Nos esforzamos
para ofrecer un servicio al cliente y una calidad excepcionales
traducciones que permiten a nuestros clientes
comunicar su mensaje en cualquier idioma.`

let span2 = `Nuestro compromiso con
la excelencia y la atención al detalle aseguran que cada
traducción transmite con precisión el significado pretendido y
matices culturales. Nos dedicamos a empoderar a las empresas
e individuos para expandir su alcance y hacer un impacto positivo
impactar globalmente a través de una comunicación efectiva.`

let ar1 = `muhimatuna hi tawfir lughat daqiqat wamawthuqa
khadamat altarjamat alati tasudu fajwat alaitisal
bayn 'unas min khalfiaat thaqafiat mukhtalifatin. nahn nunadil
litaqdim khidmat wajawdat aistithnayiyat lileumala'
altarjumat alati tumakin eumalayina ealaa nahw faeaal
tawsil risalatihim bi'ayi lughatin.`;

let ar2 = `yadman ailtizamuna bialtamayuz walaihtimam bialtafasil 
'an tanqal kula tarjamat bidiqat almaenaa 
almaqsud walfuruq althaqafiat aldaqiqati. 
nahn multazimun bitamkin alsharikat wal'afrad min 
tawsie nitaq wusulihim wa'iihdath tathir 'iijabiin 
ealaa mustawaa alealam min khilal altawasul alfaeaal`;

let eng1 = `Our mission is to provide accurate and reliable 
language translation services that bridge the communication gap between
 people from different cultural backgrounds. We strive to deliver exceptional 
 customer service and quality translations that enable our clients to effectively 
 communicate their message in any language.`; 

 let eng2 = `Our commitment to excellence and attention to detail ensures that every translation 
 accurately conveys the intended meaning and 
 cultural nuances. We are dedicated to empowering 
 businesses and individuals to expand their reach 
 and make a positive impact globally through 
 effective communication.`;

btns.forEach((btn) =>{
    btn.addEventListener('click',() =>{
       switch(btn.id){
        case 'btn1':
            p1.innerHTML = eng1; 
            p2.innerHTML = eng2; 
        break; 
        case 'btn2':
            p1.innerHTML = span1; 
            p2.innerHTML = span2;
        break; 
        case 'btn3':
            p1.innerHTML = fr1; 
            p2.innerHTML = fr2; 
        break; 
        case 'btn4':
            p1.innerHTML = ar1; 
            p2.innerHTML = ar2; 
        break;  
       }
    }); 
})

// media 

let styles = window.getComputedStyle(document.getElementById('main')); 
let maxWidth = styles.getPropertyValue('width'); 

console.log(maxWidth); 
