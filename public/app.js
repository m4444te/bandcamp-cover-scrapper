document.addEventListener('DOMContentLoaded', () => {
    // Example images array; replace with your dynamic image source
    const images = [
        "images/a0037674980_16.jpg",
        "images/a0080958176_16.jpg",
        "images/a0138943625_16.jpg",
        "images/a0215954292_16.jpg",
        "images/a0252151911_16.jpg",
        "images/a0263227203_16.jpg",
        "images/a0323761281_16.jpg",
        "images/a0336734541_16.jpg",
        "images/a0356145139_16.jpg",
        "images/a0366077726_16.jpg",
        "images/a0386996138_16.jpg",
        "images/a0449583179_16.jpg",
        "images/a0472557557_16.jpg",
        "images/a0475567767_16.jpg",
        "images/a0508596370_16.jpg",
        "images/a0547711319_16.jpg",
        "images/a0574367588_16.jpg",
        "images/a0621011247_16.jpg",
        "images/a0638003485_16.jpg",
        "images/a0639134138_16.jpg",
        "images/a0790634251_16.jpg",
        "images/a0814792025_16.jpg",
        "images/a0845795089_16.jpg",
        "images/a0917155155_16.jpg",
        "images/a0928515561_16.jpg",
        "images/a0936721335_16.jpg",
        "images/a0984851510_16.jpg",
        "images/a0994913497_16.jpg",
        "images/a1008454897_16.jpg",
        "images/a1019116337_16.jpg",
        "images/a1024452511_16.jpg",
        "images/a1027405581_16.jpg",
        "images/a1088662447_16.jpg",
        "images/a1092915212_16.jpg",
        "images/a1108085575_16.jpg",
        "images/a1108443201_16.jpg",
        "images/a1133635805_16.jpg",
        "images/a1156969315_16.jpg",
        "images/a1183078555_16.jpg",
        "images/a1242068286_16.jpg",
        "images/a1264016413_16.jpg",
        "images/a1267985887_16.jpg",
        "images/a1296158493_16.jpg",
        "images/a1298364451_16.jpg",
        "images/a1325811944_16.jpg",
        "images/a1327911281_16.jpg",
        "images/a1339373472_16.jpg",
        "images/a1475637696_16.jpg",
        "images/a1515744545_16.jpg",
        "images/a1682172958_16.jpg",
        "images/a1709733634_16.jpg",
        "images/a1718686378_16.jpg",
        "images/a1732868297_16.jpg",
        "images/a1741863525_16.jpg",
        "images/a1754658893_16.jpg",
        "images/a1790385227_16.jpg",
        "images/a1865016723_16.jpg",
        "images/a1866150137_16.jpg",
        "images/a1962525073_16.jpg",
        "images/a1976551661_16.jpg",
        "images/a1990978162_16.jpg",
        "images/a1994515325_16.jpg",
        "images/a2044514616_16.jpg",
        "images/a2051300587_16.jpg",
        "images/a2053229736_16.jpg",
        "images/a2071296021_16.jpg",
        "images/a2093794911_16.jpg",
        "images/a2129668161_16.jpg",
        "images/a2135037304_16.jpg",
        "images/a2186476921_16.jpg",
        "images/a2224837044_16.jpg",
        "images/a2230347563_16.jpg",
        "images/a2259462731_16.jpg",
        "images/a2414545688_16.jpg",
        "images/a2434998680_16.jpg",
        "images/a2458498177_16.jpg",
        "images/a2513244670_16.jpg",
        "images/a2513497935_16.jpg",
        "images/a2529522318_16.jpg",
        "images/a2598364023_16.jpg",
        "images/a2628192431_16.jpg",
        "images/a2631565452_16.jpg",
        "images/a2650316789_16.jpg",
        "images/a2669372252_16.jpg",
        "images/a2728978023_16.jpg",
        "images/a2742227154_16.jpg",
        "images/a2770015256_16.jpg",
        "images/a2888562113_16.jpg",
        "images/a2893564638_16.jpg",
        "images/a2899407937_16.jpg",
        "images/a2947336024_16.jpg",
        "images/a3009860211_16.jpg",
        "images/a3015574160_16.jpg",
        "images/a3045438816_16.jpg",
        "images/a3354598487_16.jpg",
        "images/a3411407948_16.jpg",
        "images/a3414830927_16.jpg",
        "images/a3463802364_16.jpg",
        "images/a3536571724_16.jpg",
        "images/a3568094522_16.jpg",
        "images/a3611903754_16.jpg",
        "images/a3642473563_16.jpg",
        "images/a3722306450_16.jpg",
        "images/a3732390728_16.jpg",
        "images/a3776783155_16.jpg",
        "images/a3792929940_16.jpg",
        "images/a3817709500_16.jpg",
        "images/a3890923944_16.jpg",
        "images/a3891055703_16.jpg",
        "images/a3965473181_16.jpg",
        "images/a3966821834_16.jpg",
        "images/a3970959334_16.jpg",
        "images/a4040894718_16.jpg",
        "images/a4119748949_16.jpg",
        "images/a4174822897_16.jpg",
        "images/a4226666448_16.jpg",
        "images/a4259993292_16.jpg",
        "images/a4287662023_16.jpg",
        "images/a4292911708_16.jpg"
    ];

    const gallery = document.getElementById('gallery');

    images.forEach(imageSrc => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = 'Photography';
        imgElement.onclick = () => showLightbox(imgElement.src);

        card.appendChild(imgElement);
        gallery.appendChild(card);
    });
});

function showLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    document.addEventListener('keydown', handleKeyDown);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
}
