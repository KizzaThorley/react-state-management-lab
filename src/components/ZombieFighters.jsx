
import React from 'react';

const ZombieFighters = () => {
    const initialZombieFighters = [
        {
            name: 'Survivor',
            price: 12,
            strength: 6,
            agility: 4,
            img: 'https://via.placeholder.com/150/92c952',
        },
        {
            name: 'Scavenger',
            price: 10,
            strength: 5,
            agility: 5,
            img: 'https://via.placeholder.com/150/771796',
        },
        {
            name: 'Shadow',
            price: 18,
            strength: 7,
            agility: 8,
            img: 'https://via.placeholder.com/150/24f355',
        },
        {
            name: 'Tracker',
            price: 14,
            strength: 7,
            agility: 6,
            img: 'https://via.placeholder.com/150/d32776',
        },
        {
            name: 'Sharpshooter',
            price: 20,
            strength: 6,
            agility: 8,
            img: 'https://via.placeholder.com/150/1ee8a4',
        },
        {
            name: 'Medic',
            price: 15,
            strength: 5,
            agility: 7,
            img: 'https://via.placeholder.com/150/66b7d2',
        },
        {
            name: 'Engineer',
            price: 16,
            strength: 6,
            agility: 5,
            img: 'https://via.placeholder.com/150/56acb2',
        },
        {
            name: 'Brawler',
            price: 11,
            strength: 8,
            agility: 3,
            img: 'https://via.placeholder.com/150/8985dc',
        },
        {
            name: 'Infiltrator',
            price: 17,
            strength: 5,
            agility: 9,
            img: 'https://via.placeholder.com/150/392537',
        },
        {
            name: 'Leader',
            price: 22,
            strength: 7,
            agility: 6,
            img: 'https://via.placeholder.com/150/602b9e',
        },
    ];

    const [team, setTeam] = React.useState([])
    const [money, setMoney] = React.useState(100)
    const [zombieFighters, setZombieFighters] = React.useState(initialZombieFighters)
    const [userFighterSearch, setUserFighterSearch] = React.useState('')

    const [totalStrength, setTotalStrength] = React.useState(0)
    const [totalAgility, setTotalAgility] = React.useState(0)

    function handleAddFighter(fighter) {
        console.log(fighter);
        if (money >= fighter.price) {

            setMoney(money - fighter.price)
            const newTeam = structuredClone(team)
            newTeam.push(fighter)
            setTeam(newTeam)
            setTotalStrength(totalStrength + fighter.strength)
            setTotalAgility(totalAgility + fighter.agility)


        } else {
            console.log('Your too poor');
        }
    }

    function removeTeamMember(fighter, idx) {
        const newTeamList = structuredClone(team)
        newTeamList.splice(idx, 1)
        setTeam(newTeamList)
        setMoney(money + fighter.price)
        setTotalAgility(totalAgility - fighter.agility)
        setTotalStrength(totalStrength - fighter.strength)

    }

    function handleFighterSearch(e) {
        setUserFighterSearch(e.target.value)
    }
    console.log(userFighterSearch);

  

    return (<>

        <h2>Current Money: <span>{money}</span></h2>
        <h2>Teams Strength: {totalStrength} </h2>
        <h2>Teams Agility: {totalAgility}</h2>
        <h2>Current Team</h2>
        <ul>
            {(team.length === 0) && <p>Pick some Team Members</p>}
            {team.map((fighter, idx) => {
                return <div key={idx}>
                    <li><img src={fighter.img}></img></li>
                    <li>{fighter.name}</li>
                    <li>Price: {fighter.price}</li>
                    <li>Strength: {fighter.strength}</li>
                    <li>Agility: {fighter.agility}</li>
                    <button onClick={() => removeTeamMember(fighter, idx)}>Remove</button>
                </div>

            })}
        </ul>

        <h2>Fighters</h2>
        <input
            placeholder='Search for Fighters'
            type='text'
            value={userFighterSearch}
            onChange={handleFighterSearch}>
        </input>
        <ul>
            {userFighterSearch ?
                zombieFighters.filter((fighter) => fighter.name.toLocaleLowerCase().includes(userFighterSearch.toLocaleLowerCase())
                ).map((fighter, idx) => {
                    return <div key={idx}>
                        <li><img src={fighter.img}></img></li>
                        <li>{fighter.name}</li>
                        <li>Price: {fighter.price}</li>
                        <li>Strength: {fighter.strength}</li>
                        <li>Agility: {fighter.agility}</li>
                        <button onClick={() => handleAddFighter(fighter)}>Add</button>
                    </div>

                })
                : zombieFighters.map((fighter, idx) => {
                    return <div key={idx}>
                        <li><img src={fighter.img}></img></li>
                        <li>{fighter.name}</li>
                        <li>Price: {fighter.price}</li>
                        <li>Strength: {fighter.strength}</li>
                        <li>Agility: {fighter.agility}</li>
                        <button onClick={() => handleAddFighter(fighter)}>Add</button>
                    </div>

                })}

        </ul>


    </>
    );
}

export default ZombieFighters
