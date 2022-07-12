import Statistic from "components/Statistics/Statistics";
import React from "react";
import App from "../App";
import css from "./Section.module.css"

export const Section = ({ title, children }) => { 
    return (
    <section className={css.section}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
    )
};