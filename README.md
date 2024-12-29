# osirase-server
このプログラムは、osirase-clientとペアで動きます。

## なんのプログラム？
これは、http GETされたときにスピーカーで音を鳴らすサーバーです。私の家で、インターホン的な使い方をしています。
また、```sudo shutdown now```できるので、ローカルで使ったほうが良さそうですよ。

## 使い方
次のパッケージをダウンロードします。

```nodejs``` , ```mpv```

あとは、```$ node main.js```するだけ。

localhost:5000/osirase/1でsound1.mp3が流れます。

localhost:5000/osirase/2...3までです。

ランダムでsound4.mp3が流れます。

localhost:5000/shutdown/nekosaikyoで、シャットダウンします。

以上！
