---
name: git-worktree
description: Manages Git worktrees for isolated parallel development. Use when creating separate working directories for branches without switching the main repo.
---

# Git Worktree

Create and use Git worktrees so multiple branches can be worked on in separate directories.

**Commands (run from repo root):**
- List: `git worktree list`
- Add: `git worktree add <path> <branch>` (e.g. `git worktree add ../project-feat ../feature-branch`)
- Remove: `git worktree remove <path>` (after switching away and committing or discarding)

**Use case:** Run a separate agent or human in another branch in a different folder without touching the current branch. Each worktree has its own working directory but shares the same .git history.

**Note:** Repo root is the workspace root; backend/frontend/lambdas may be sibling folders or monorepo structure. Create worktrees from the repo that contains the branch you need.
