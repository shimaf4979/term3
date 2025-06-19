"use client";

import React, { JSX } from "react";
import styles from "./page.module.scss";

export default function ExampleComponent() {
  // 基本の配列とオブジェクト
  const fruits = ["りんご", "バナナ", "みかん"];
  const person = { name: "太郎", age: 20 };

  // 配列の要素を表示
  console.log(fruits);
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
  console.log(fruits.length);
  console.log(fruits.push("ぶどう"));
  console.log(fruits);

  // オブジェクトの要素を表示
  console.log(person);
  console.log(person.name);
  console.log(person.age);

  // ---------------------------------------
  // 1. forループでリスト表示（手動で処理）
  const fruitListByFor: JSX.Element[] = [];
  for (let i = 0; i < fruits.length; i++) {
    fruitListByFor.push(<li key={i}>{fruits[i]}</li>);
  }

  // 2. mapで簡潔に書く
  const fruitListByMap = (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );

  // ---------------------------------------
  // 3. 分割代入（オブジェクト）
  const { name, age } = person; // 分割代入あり
  const nameWithoutDestructuring = person.name; // 分割代入なし
  const ageWithoutDestructuring = person.age;

  // 4. 分割代入（配列）
  const [firstFruit, secondFruit, thirdFruit] = fruits; // 分割代入あり
  const firstFruitWithoutDestructuring = fruits[0]; // 分割代入なし
  const secondFruitWithoutDestructuring = fruits[1];
  const thirdFruitWithoutDestructuring = fruits[2];

  // ---------------------------------------
  // 5. スプレッド構文（オブジェクトのコピーと変更）
  const olderPerson = { ...person, age: 30 }; // スプレッド構文あり
  const olderPersonWithoutSpread = {
    name: person.name,
    age: 30,
  }; // スプレッド構文なし

  const newPerson = { ...person, gender: "男性" }; // スプレッド構文あり
  const newPersonWithoutSpread = {
    name: person.name,
    age: person.age,
    gender: "男性",
  }; // スプレッド構文なし

  // 6. スプレッド構文（配列のコピーと追加）
  const moreFruits = [...fruits, "ぶどう", "もも"]; // スプレッド構文あり
  const moreFruitsWithoutSpread = fruits.concat(["ぶどう", "もも"]); // スプレッド構文なし

  // ---------------------------------------
  // 7. 論理演算子 ||（左が falsy なら右を使う）
  // falsy は false, 0, "", null, undefined, NaN です。
  // const displayName = "" || "名無し";
  const usernameFromObject = person.name || "ゲスト";

  // 8. 論理演算子 ??（null または undefined の場合のみ右を使う）
  const score = 0;
  const displayScore = score ?? 100;

  const maybeUndefined = undefined;
  const fallbackValue = maybeUndefined ?? "デフォルト";

  // 9. 論理演算子 &&（左が truthy なら右を評価）
  const showAdultMessage = age >= 18 && "大人です";

  return (
    <div className={styles.container}>
      <h1>React × JavaScript 基礎学習</h1>

      <h2>1. forループで配列を表示</h2>
      <ul>{fruitListByFor}</ul>

      <h2>2. mapで配列を表示</h2>
      {fruitListByMap}

      <h2>3. 分割代入（オブジェクト）</h2>
      <p>
        分割代入あり → 名前: {name}, 年齢: {age}
      </p>
      <p>
        分割代入なし → 名前: {nameWithoutDestructuring}, 年齢:{" "}
        {ageWithoutDestructuring}
      </p>

      <h2>4. 分割代入（配列）</h2>
      <p>
        分割代入あり → {firstFruit}, {secondFruit}, {thirdFruit}
      </p>
      <p>
        分割代入なし → {firstFruitWithoutDestructuring},{" "}
        {secondFruitWithoutDestructuring}, {thirdFruitWithoutDestructuring}
      </p>

      <h2>5. スプレッド構文（オブジェクト）</h2>
      <p>スプレッドあり（年齢変更）: {olderPerson.age}</p>
      <p>スプレッドなし（年齢変更）: {olderPersonWithoutSpread.age}</p>
      <p>スプレッドあり（性別追加）: {newPerson.gender}</p>
      <p>スプレッドなし（性別追加）: {newPersonWithoutSpread.gender}</p>

      <h2>6. スプレッド構文（配列）</h2>
      <p>スプレッドあり: {moreFruits.join(", ")}</p>
      <p>スプレッドなし: {moreFruitsWithoutSpread.join(", ")}</p>

      <h2>7. 論理演算子 ||</h2>
      {/* <p>空文字に対するデフォルト: {displayName}</p> */}
      <p>person.name || "ゲスト": {usernameFromObject}</p>

      <h2>8. 論理演算子 ??</h2>
      <p>score ?? 100: {displayScore}</p>
      <p>undefined ?? デフォルト: {fallbackValue}</p>

      <h2>9. 論理演算子 &&</h2>
      <p>年齢が18歳以上なら: {showAdultMessage}</p>
    </div>
  );
}
