#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

PLUGIN_NAME="psters-ai-workflow"
SOURCE_DIR="${REPO_ROOT}/plugins/${PLUGIN_NAME}"
TARGET_BASE="${HOME}/.cursor/plugins/local"
TARGET_DIR="${TARGET_BASE}/${PLUGIN_NAME}"

if [[ ! -d "${SOURCE_DIR}" ]]; then
  echo "Error: source plugin directory not found: ${SOURCE_DIR}" >&2
  exit 1
fi

mkdir -p "${TARGET_BASE}"
rm -rf "${TARGET_DIR}"
mkdir -p "${TARGET_DIR}"
cp -R "${SOURCE_DIR}/." "${TARGET_DIR}/"

echo "Installed ${PLUGIN_NAME} to ${TARGET_DIR}"
echo "Next step: restart Cursor (or reload window)."
