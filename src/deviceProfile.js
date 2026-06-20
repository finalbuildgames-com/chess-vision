const TABLET_MIN_WIDTH = 700;
const DESKTOP_MIN_WIDTH = 1024;

export function getDeviceProfile({ width, platform }) {
  const normalizedWidth = Math.max(0, Number(width) || 0);
  const normalizedPlatform = platform || "unknown";
  const formFactor = getFormFactor(normalizedWidth);

  return {
    platform: normalizedPlatform,
    formFactor,
    isNative: normalizedPlatform !== "web",
    maxContentWidth: getMaxContentWidth(normalizedWidth, formFactor)
  };
}

function getFormFactor(width) {
  if (width >= DESKTOP_MIN_WIDTH) {
    return "desktop";
  }

  if (width >= TABLET_MIN_WIDTH) {
    return "tablet";
  }

  return "phone";
}

function getMaxContentWidth(width, formFactor) {
  if (formFactor === "desktop") {
    return 960;
  }

  if (formFactor === "tablet") {
    return 760;
  }

  return Math.max(width, 320);
}
