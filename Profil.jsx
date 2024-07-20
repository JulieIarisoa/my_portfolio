import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import '../css/Profil.css'
import Aside from '../Components/AsideBar'
import school from '../images/agence.png';
import { Link } from 'react-router-dom';

function Profil() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='center'>
                <Aside />
                <section className='contenu p-4'>
                    <div className="profil center">
                        <div className="info-ecole p-4">
                            <div className="couverture p-2">
                                <p className='alert alert-info text-center' style={{ fontSize: '0.8em' }}>Sagesse - intelligence - Reussite</p>

                            </div>
                            <div className='center photo-profil mb-5'>
                                <img src={school} alt="" width={150} />
                            </div>
                            <p className='alert alert-info' style={{ fontSize: '0.8em' }}>ECOLE LTP AMPEFILOHA</p>
                            <p className='alert alert-info' style={{ fontSize: '0.8em' }}>Lot : 2345B / 4240 Ampefiloha</p>
                            <p className='alert alert-info' style={{ fontSize: '0.8em' }}>Dirigé(e) par :  RAKOTONAMBOARINA Chrisy</p>
                            <Link to='/' className='btn btn-info btn-sm p-3' style={{ width: '100%' }}><i class="fa fa-pencil" aria-hidden="true"></i> Modifier mon profile</Link>
                        </div>
                        <div className="info-generale p-3">
                            <div>
                                <p className='alert alert-info'><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp; Année scolaire : <b> 2022 - 2023</b></p>
                            </div>
                            <div className="generale center p-2">
                                <div className="stat p-3">
                                    <p style={{ textAlign: 'center' }}>Statistique</p>
                                    <div className="statis center">
                                        {/* Nombre de classe */}
                                        <div>
                                            <h1 className="fa fa-line-chart" style={{ color: 'blue' }} aria-hidden="true"></h1>
                                        </div>
                                        <div style={{ paddingLeft: '10%' }}>
                                            <table>
                                                <thead className='thead'>
                                                    <tr>Nombre de classe</tr>
                                                </thead>
                                                <tbody className='tbody'>
                                                    <tr>263</tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Nombre etudiant */}
                                    <div className="statis center">
                                        <div>
                                            <h1 className="fa fa-line-chart" style={{ color: 'blue' }} aria-hidden="true"></h1>
                                        </div>
                                        <div style={{ paddingLeft: '10%' }}>
                                            <table>
                                                <thead className='thead'>
                                                    <tr>Nombre d'étudiant</tr>
                                                </thead>
                                                <tbody className='tbody'>
                                                    <tr>263</tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* Abonement */}
                                    <div className="statis center">
                                        <div>
                                            <h1 className="fa fa-check-circle" style={{ color: 'green' }} aria-hidden="true"></h1>
                                        </div>
                                        <div style={{ paddingLeft: '10%' }}>
                                            <table>
                                                <thead className='thead'>
                                                    <tr>Réabonnement aprés :</tr>
                                                </thead>
                                                <tbody className='tbody'>
                                                    <tr>263 Jours</tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="prof-li-pa p-3">
                                    <p style={{ textAlign: 'center' }}>Mes profs</p>
                                    <div className="prof-li">
                                        <div className="header-prof p-3">
                                            <form action="">
                                                <div className='center'>
                                                    <input type="text" className='form-control' placeholder='Rechercher' />
                                                    <button className='btn btn-primary' style={{ marginLeft: '2%' }}>Rechercher</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='table-responsive p-3 list-pr'>
                                            <table className='table table-hover' border='0' style={{ fontSize: '0.8em' }}>
                                                <tbody>
                                                    <tr>
                                                        <td>Randriamaromanana steeven</td>
                                                        <td>Math</td>
                                                        <td>2nd E</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nom</td>
                                                        <td>Matière</td>
                                                        <td>Classe</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profil;