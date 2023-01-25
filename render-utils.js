export function renderBandCard(band) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('band-card');

    p.textContent = band.name;
    img.src = div.append(p, img);
    a.append(div);

    return a;
}
