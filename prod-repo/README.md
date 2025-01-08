# Staging Environment Repository (Deprecated)

## Overview

This repository was used as a staging environment for testing and reviewing changes before deploying them to the production environment.

Due to the limitation of GitHub Pages, where only a single branch of a repository can be specified for hosting, we adopted the approach of managing a **separate repository for the staging environment**.

---

## Attempts in Operation

The following steps were attempted to manage the staging environment:

1. **Managing separate repositories for staging and production**
   - Development and testing were conducted in the staging environment, and once confirmed, changes were synchronized to the production repository.

2. **Automating synchronization using GitHub Actions**
   - A GitHub Actions workflow was created to automatically synchronize changes from the staging repository to the production repository and generate a Pull Request.

---

## Reason for Deprecation

The staging environment was deprecated, and the operation was shifted to a single production repository for the following reasons:

1. **Complex management**
   - Managing separate repositories required frequent synchronization, resulting in increased operational complexity.

2. **Frequent synchronization errors**
   - Errors during the synchronization process using GitHub Actions made it difficult to maintain a stable workflow.

3. **Simplifying the workflow**
   - The workflow was simplified by adopting a development process where changes are verified locally on `localhost` and directly committed to the `main` branch of the production repository.

---

## Future Operation

- The staging environment has been deprecated, and only the **production environment will be used** going forward.
- Development will be conducted locally, with changes verified on `localhost`, followed by **direct commits to the `main` branch** of the production repository.
- This change is intended to reduce management overhead and improve development efficiency with a simpler workflow.

---

## Additional Notes

This repository will be retained as an archive, but all future development and deployment will be managed exclusively in the production repository.

<br><br>
---
<br><br>


# Staging Environment Repository (廃止)

## 概要

このリポジトリは、`production` 環境（本番サイト）への変更を反映する前に、`staging` 環境でテスト・確認を行う目的で運用していました。

GitHub Pages の制約により、単一リポジトリ内で `staging` と `production` の両方をホスティングできないため、**別リポジトリを用意して `staging` 環境を管理する**方針を採用していました。

---

## 運用の試み

以下は、このリポジトリを用いた `staging` 環境の運用方法の試みです。

1. **`staging` リポジトリと `production` リポジトリを別々に管理**
   - `staging` 環境で開発・テストを行い、問題がない場合は `production` リポジトリに同期する。
   
2. **GitHub Actions を使った自動同期**
   - `staging` 環境に Push された変更を、GitHub Actions によって `production` 環境へ自動的に同期し、Pull Request を作成するワークフローを構築。

---

## 廃止の理由

以下の理由から、この `staging` 環境を廃止し、`production` 環境のみで運用する方針に変更しました。

1. **管理の煩雑さ**
   - 別リポジトリを用意することで、リポジトリ間の同期が必要になり、運用が複雑化したため。

2. **同期エラーの発生**
   - GitHub Actions を使った自動同期中にエラーが発生するケースが多く、安定した同期が難しかったため。

3. **運用の簡略化**
   - `localhost` での動作確認後、直接 `main` ブランチにコミットする運用に変更することで、管理のシンプルさと開発効率を向上させるため。

---

## 今後の運用

- `staging` 環境を廃止し、**`production` 環境のみを運用**する方針に変更しました。
- **開発はローカル環境（`localhost`）で動作確認を行い、直接 `main` ブランチにコミットする運用**に統一します。
- これにより、管理の手間を削減し、よりシンプルで効率的な開発フローを実現します。

---

## 補足

このリポジトリはアーカイブとして残しておきますが、今後は `production` 環境のみを使用します。
