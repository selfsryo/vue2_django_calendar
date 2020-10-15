# 次の祝日まであと何日カレンダー


## 概要
・ボタンを押すと祝日まであと何日か表示する、ただそれだけのカレンダーです。<br>
・Djangoのアドミンページから祝日を登録する必要があります。<br>
・Vue2を使っています。<br>
・VueでビルドしたファイルをDjangoで直接レンダリングしています。

![](https://selfsryo-blog.s3-ap-northeast-1.amazonaws.com/github/vue_django_calendar/vuecalendar.gif)
<br>


## 確認バージョン
| docker | docker-compose |
:---:|:---:
| 19.03.13 | 1.27.4 |
<br>


## 環境構築
・リポジトリをクローン
```
git clone https://github.com/selfsryo/vue2_django_calendar
cd vue2_django_calendar
```

・バックグラウンドでコンテナ立ち上げ&ビルド
```
docker-compose up -d --build
```

・マイグレート
```
docker-compose run --rm web python3 manage.py migrate
```

・管理者作成
```
docker-compose run --rm web python3 manage.py createsuperuser
```

・以下URLからアドミンページに遷移。祝日を登録します。
```
http://127.0.0.1:8000/admin/
```

・以下URLからトップページに遷移できます。
```
http://127.0.0.1:8000/
```
<br>


## Vueの開発モード
・（上記でコンテナを起動した状態で）Vueのコンテナに入る
```
docker exec -it vue2 /bin/bash
```

・移動
```
cd vue-calendar/
```

・パッケージインストール
```
npm install
```

・開発サーバー起動
```
npm run serve
```

・以下URLでページ表示
```
http://127.0.0.1:8080/
```
<br>

##### 修正後のファイルをDjangoで表示する場合<br>
・以下でバンドルファイル生成
```
npm run build
```

・以下URLでも修正後のページが表示されます。
```
http://127.0.0.1:8000/
```
