export const Interpolation = () =>{
    
    const player = {
        name: "Felix Holmberg",
        car: "Porsche 911 991.2 R GT3",
        carNumber: 7,
        track: "Watkins Glen",
        time: 120.2,
        trackRecord:120,
        game: "Assetto Corsa Comptizione"
    }
    

    return (
        <>
        <h1>{player.game}</h1>
        <p>Player: {player.name}</p>
        <p>Car: {player.car}</p>
        <p>Car Number: {player.carNumber}</p>
        <p>Track: {player.track}</p>
        <section>Time away from track record: {parseFloat(player.time) - parseFloat(player.trackRecord)} sec</section>
        </>
    )
}