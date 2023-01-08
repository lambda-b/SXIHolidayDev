### 環境構築
とりあえず Spring Initializr でそれっぽいパッケージを指定して、java 11 で Gradle のプロジェクトを作成した.

./gradlew build をやると失敗した。

Lombok DEVELOPER TOOLS
Spring Boot DevTools DEVELOPER TOOLS
Spring Web WEB
Spring Security SECURITY
Spring Configuration Processor DEVELOPER TOOLS
PostgreSQL Driver SQL
Spring Data JDBC SQL

Driver が見つからない的なエラーが出る

何故かプロジェクト名を変えたら?ビルドできるようになった。
import した段階でビルドが始まって、Gradleが依存関係を解決してPackageをSystem Library に追加し始めた


