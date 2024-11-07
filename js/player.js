const { Player } = window.Shikwasa;

const player = new Player({
    container: document.getElementById('player-container'),
    audio: {
        title: 'Title',
        artist: 'Artists',
        cover: 'https://www.kuppingercole.com/pics/kc-share.jpg',
        src: 'https://audio.mp3'
    },
    fixed: {
        type: 'fixed',
        position: 'bottom'
    },
    themeColor: '#ff4081',
    autoplay: false,
    shortcuts: true
});

player.on('play', () => {
    console.log('playing');
});

player.on('pause', () => {
    console.log('p');
});

player.on('ended', () => {
    console.log('end');
});

player.on('loadeddata', () => {
    // this to add link on image ( we wrap it in to anchor tag)
    // shk-title_wrap for title div
    // shk-artist_wrap for artist
    const coverImg = document.querySelector('.shk-img');
    if (coverImg) {
        const wrapper = document.createElement('a');
        wrapper.href = 'https://wallpapercave.com/wp/wp3830572.jpg'; // where should link lead 
        wrapper.target = '_blank';
        wrapper.rel = 'noopener noreferrer';
        const clone = coverImg.cloneNode(true);
        wrapper.appendChild(clone);
        coverImg.parentNode.replaceChild(wrapper, coverImg);
    }
});

player.on('error', (error) => {
    console.error('error:', error);
});