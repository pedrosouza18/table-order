import React from 'react';
import './table.css';

const table = (props) => {
    return (
        <table className="table-planets">
            <thead className="table-planets__thead">
                <tr className="table-planets__tr">    
                    <th onClick={props.click('name')} className="table-planets__th">Name</th>
                    <th onClick={props.click('rotation_period')} className="table-planets__th">Rotation Period</th>
                    <th onClick={props.click('orbital_period')} className="table-planets__th">Orbital Periodo</th>
                    <th onClick={props.click('diameter')} className="table-planets__th">Diameter</th>
                    <th onClick={props.click('climate')} className="table-planets__th">Climate</th>
                    <th onClick={props.click('gravity')} className="table-planets__th">Gravity</th>
                    <th onClick={props.click('terrain')} className="table-planets__th">Terrain</th>
                    <th onClick={props.click('surface_water')} className="table-planets__th">Surface Water</th>
                    <th onClick={props.click('population')} className="table-planets__th">Population</th>
                    <th className="table-planets__th">Residents</th>
                    <th className="table-planets__th">Films</th>
                </tr>
            </thead>
            <tbody className="table-planets__tbody">
                {
                    props.planets.map((planet, index) => {
                        return (
                            <tr key={index} className="table-planets__tr--td">
                                <td className="table-planets__item">{planet.name}</td>
                                <td className="table-planets__item">{planet.rotation_period}</td>
                                <td className="table-planets__item">{planet.orbital_period}</td>
                                <td className="table-planets__item">{planet.diameter}</td>
                                <td className="table-planets__item">{planet.climate}</td>
                                <td className="table-planets__item">{planet.gravity}</td>
                                <td className="table-planets__item">{planet.terrain}</td>
                                <td className="table-planets__item">{planet.surface_water}</td>
                                <td className="table-planets__item">{planet.population}</td>
                                <td className="table-planets__item">{planet.residents.length}</td>
                                <td className="table-planets__item">{planet.films.length}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default table;