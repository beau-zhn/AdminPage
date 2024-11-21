"use client"
import Image from "next/image";
import styles from "./requests.module.css";
import React, { useState } from 'react';

const requests = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Requests</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Date</td>
            <td>Location</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>0001</td>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Dilnaz Rakhmankulova
              </div>
            </td>
          
            <td>20.11.2024</td>
            <td>Aqtobe</td>
            <td>
              <select className={styles.statusSelect}>
                <option value="pending" className={`${styles.status} ${styles.pending}`}>Pending</option>
                <option value="approved" className={`${styles.status} ${styles.done}`}>Approved</option>
                <option value="cancelled" style={{ backgroundColor: 'red' }}>Cancelled</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>0002</td>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Kymbat Amanova
              </div>
            </td>
        
            <td>20.11.2024</td>
            <td>Almaty</td>
              <td>
  <select className={styles.statusSelect}>
    <option value="pending" className={`${styles.status} ${styles.pending}`}>Pending</option>
    <option value="approved" className={`${styles.status} ${styles.done}`}>Approved</option>
    <option value="cancelled" style={{ backgroundColor: 'red' }}>Cancelled</option>
  </select>

                  {/* <select
                  className={`${styles.statusSelect} ${styles[selectedValue]}`}
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="done">Approved</option>
                  <option value="cancelled">Cancelled</option>
                </select> */}
</td>
          
          </tr>
          <tr>
          <td>0002</td>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Rimma Kubanova
              </div>
            </td>
            
            <td>20.11.2024</td>
            <td>Almaty</td>
            <td>
              {/* <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span> */}
              <select className={styles.statusSelect}>
                <option value="pending" className={`${styles.status} ${styles.pending}`}>Pending</option>
                <option value="approved" className={`${styles.status} ${styles.done}`}>Approved</option>
                <option value="cancelled" style={{ backgroundColor: 'red' }}>Cancelled</option>
              </select>
                          
            </td>
          </tr>
          <tr>
          <td>0004</td>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ariana Kenbayeva
              </div>
            </td>
          
            <td>20.11.2024</td>
            <td>Shymkent</td>
            <td>
            <select className={styles.statusSelect}>
    <option value="pending" className={`${styles.status} ${styles.pending}`}>Pending</option>
    <option value="approved" className={`${styles.status} ${styles.done}`}>Approved</option>
    <option value="cancelled" style={{ backgroundColor: 'red' }}>Cancelled</option>
  </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default requests;