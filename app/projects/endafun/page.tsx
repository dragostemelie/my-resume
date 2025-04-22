"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProjectDescription } from "../components/project-description";

import screen1 from "../../assets/screens/endafun-screen1.jpg";
import screen2 from "../../assets/screens/endafun-screen2.jpg";
import screen3 from "../../assets/screens/endafun-screen3.jpg";
import screen4 from "../../assets/screens/endafun-screen4.jpg";

import { PHONES } from "@/app/consts/phones";
import projects from "../../../data/projects.json";
import styles from "../components/layout.module.css";

const { name, about, technologies, link, involvement } = projects[1];
const phoneImage = PHONES.endafun;

export default function Endafun() {
    const [animate, setAnimate] = useState(false);

    const startAnimating = () => {
        setAnimate(true);
    };

    useEffect(() => {
        startAnimating();
    }, []);
    return (
        <>
            <Header>
                <div className={`${styles.header} ${animate ? "animate" : ""}`}>
                    <h1>{name}</h1>
                    <div className={styles.quote}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;{about}</span>
                    </div>
                </div>
            </Header>
            <main className={`${styles.main} ${animate ? styles.animate : ""}`}>
                <ProjectDescription {...{ name, about, technologies, link, involvement, phoneImage }} />

                <div className={styles.wrapper}>
                    <div className={styles.screens}>
                        <Image src={screen1} alt={name} placeholder="blur" />
                        <Image src={screen2} alt={name} placeholder="blur" />
                        <Image src={screen3} alt={name} placeholder="blur" />
                        <Image src={screen4} alt={name} placeholder="blur" />
                    </div>
                </div>
            </main>
            <Footer downloadLink="/docs/projects-dragos-temelie.pdf" downloadName="Projects" />
        </>
    );
}
