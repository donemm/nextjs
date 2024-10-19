'use client'

import Image from "next/image";
import styles from "./page.module.css";

import React, { useState, useEffect } from "react";
import { fromFetch } from "rxjs/fetch";
import { concatMap, takeUntil, tap } from "rxjs/operators";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { map, catchError, take } from 'rxjs/operators'

import LoginButton from "./_components/LoginButton";
import ReadingLink from "./_components/ReadingLink";
import ReadingPane from "./_components/ReadingPane";
import MenuEntry from "./_components/MenuEntry";
import MainIcon from "./_components/MainIcon";
import HomeLink from "./_components/HomeLink";

export const dynamic = 'force-dynamic'

export default function Home() {

const menuItem = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
   <MainIcon />
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <HomeLink />
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                      { menuItem.map((item)=><MenuEntry l={item} key={item} />) }
                    </div>
                </div>
                <ReadingLink />
            </div>
            <LoginButton />
        </div>
    </nav>
    
    <div className="container-fluid bg-grey-100 p-0 mb-5">
        <div className="row g-0 align-items-start flex-column-reverse flex-lg-row">
            <ReadingPane />
            <div className="col-lg-6">
                        <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
            </div>
        </div>
    </div>
    
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5">
        
    </div>
    </>
  );
}
