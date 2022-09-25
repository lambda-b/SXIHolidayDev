import React from 'react';
import { cx, css } from '@emotion/css';

/**
 * Home画面で使用するスタイル
 */
const styles = {
  menuBox: cx("menu-box", css`
    padding: 3rem;
    display: flex;
    justify-content: space-around;
  `),
  menuButton: css`
    cursor: pointer;
    height: 12rem;
    width: 12rem;
    background-color: hsl(0, 0%, 100%);
    border: 1px solid black;
    border-radius: 5px;
    &:focus {
      box-shadow: 3px 2px 22px 1px rgba(32, 156, 238, 0.50);
    }
  `,
  box: "box",
  title: "title",
  container: cx("container", css`
    max-width: 640px;
    padding-top: 16px;
    margin-left: auto;
    margin-right: auto;
  `),
  titleBox: cx("title-box", css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `),
};

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Life App</h1>
        </div>
        <div className={styles.menuBox}>
          <button
            className={cx("button", styles.menuButton, "is-outlined")}
          >
            TODO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
