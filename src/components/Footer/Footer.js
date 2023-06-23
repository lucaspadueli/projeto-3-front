import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <h4>Bancos Parceiros</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href=" https://nubank.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Nubank
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.xpi.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    XP Investimentos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.c6bank.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    C6 Bank
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Developers</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="https://github.com/lucaspadueli"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Lucas Padueli
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/AndreLimaPoli"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Andre Poli
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/joaofrascione"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    João Frascione
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Cohort 97 WDPT - SP/BRAZIL | All
                        rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;