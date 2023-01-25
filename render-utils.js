export function renderBandCard(band) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('band-card');

    p.textContent = band.name;
    img.src = div.append(p, img);
    a.href = div.append(p, img);
    a.append(div);

    return a;
}

export function renderBandDetail(bandData) {
    const div = document.createElement('div');
    const bandNameEl = document.createElement('p');
    const img = document.createElement('img');

    const leadSingerEl = document.createElement('p');
    const albumNameEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const hofEl = document.createElement('p');
    const songEl = document.createElement('p');
    img.src = `../assets/${bandData.band_name.name}.png`;
    leadSingerEl.textContent = bandData.leadSinger;
    albumNameEl.textContent = bandData.album;
    yearEl.textContent = bandData.year;
    hofEl.textContent = bandData.hof;
    songEl.textContent = bandData.song;

    bandNameEl.classList.add('band');

    div.append(img, bandNameEl, leadSingerEl, albumNameEl, yearEl, hofEl, songEl);

    div.classList.add;
}
