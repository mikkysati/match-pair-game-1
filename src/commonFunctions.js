export function getRandomTiles () {
    const tilesIcons = ['fa-hand-peace-o', 'fa-binoculars', 'fa-birthday-cake', 'fa-bed', 'fa-beer', 'fa-bomb', 'fa-eye', 'fa-female'];
    let tiles;
    if (Math.round((Math.random()))) {
        tiles = [...tilesIcons.slice(0,4), ...tilesIcons.slice(0,4), ...tilesIcons.slice(0,4), ...tilesIcons.slice(0,4)];
    } else {
        tiles = [...tilesIcons.slice(4,8), ...tilesIcons.slice(4,8), ...tilesIcons.slice(4,8), ...tilesIcons.slice(4,8)];
    }
    for(let i=0; i<tiles.length; i++) {
        const temp = Math.floor(i + Math.random()*(tiles.length-i-1));
        [tiles[i], tiles[temp]] = [tiles[temp], tiles[i]]; // swap tiles
    }
    return tiles;
}