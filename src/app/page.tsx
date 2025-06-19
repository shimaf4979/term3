"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import clsx from "clsx";
import ClickButton from "@/components/ui/ClickButton";

const OriginalRemainCount = 10;

// メインのページコンポーネント
const Page = () => {
  // クリック回数を管理するstate
  const [count, setCount] = useState(0);
  const [isMaxClicked, setIsMaxClicked] = useState(false);

  // ボタンクリック時の処理を行う関数
  const handleButtonClick = () => {
    if (remainCount <= 0) {
      setIsMaxClicked(true);
      return;
    }
    setCount((prev) => {
      return prev + 1;
    });
  };

  // カウントの2倍の値を計算
  const doubleCount = count * 2;
  const remainCount = OriginalRemainCount - count;

  return (
    // メインコンテナ
    <div className={(styles.container, styles["main-contaier"])}>
      {/* ヘッダーテキスト */}
      <p className={styles.text}>
        ボタンです！！！ <span>{OriginalRemainCount} 回クリックして！！</span>
      </p>

      {/* ボタンを配置するラッパー要素 */}
      <div className={styles["button-wrapper"]}>
        {/* SCSSモジュールを使用したボタン - カスタムスタイルのみ */}
        <button className={styles.clickButton} onClick={handleButtonClick}>
          クリックする
        </button>

        {/* Bulmaのクラスを使用したボタン - Bulmaのスタイルのみ */}
        <button
          className="button is-primary"
          onClick={() => {
            handleButtonClick();
          }}
        >
          クリックする
        </button>

        {/* clsxを使用して複数のクラスを組み合わせたボタン - Bulmaとカスタムスタイルの組み合わせ */}
        <button
          className={clsx("button is-primary", styles.clickButton)}
          onClick={(e) => {
            handleButtonClick();
          }}
        >
          クリックする
        </button>
        {/* <ClickButton onClick={handleButtonClick} nyaa="nyaa">
          クリックする
        </ClickButton>
        <ClickButton onClick={handleButtonClick} nyaa="nyaa">
          クリックする
        </ClickButton>
        <ClickButton onClick={handleButtonClick} nyaa="nyaa">
          クリックする
        </ClickButton> */}
      </div>

      {/* カウント表示エリア */}

      <div
        className={clsx(
          styles["count-number"],
          isMaxClicked && styles.isMaxClicked
        )}
      >
        {/* 現在のカウント表示 */}
        <p>カウント→{count}</p>
        {/* カウントの2倍の値表示 */}
        <p>カウント*２→{doubleCount}</p>
        <p>残りカウント→{remainCount}</p>
      </div>
    </div>
  );
};

export default Page;
