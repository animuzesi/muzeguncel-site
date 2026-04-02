const viewport = document.getElementById("viewport");
const world = document.getElementById("world");
const character = document.getElementById("character");
const gameRoot = document.querySelector(".game-root");
const accessGate = document.getElementById("access-gate");
const accessFloatLayer = document.getElementById("access-float-layer");
const accessEnter = document.getElementById("access-enter");
const galleryVeil = document.getElementById("gallery-veil");
const teaserPeek = document.getElementById("teaser-peek");
const ticketPanel = document.getElementById("ticket-panel");
const ticketInput = document.getElementById("ticket-input");
const ticketSubmit = document.getElementById("ticket-submit");
const ticketError = document.getElementById("ticket-error");
const entranceLayer = document.getElementById("entrance-layer");
const memoryLayer = document.getElementById("memory-layer");
const interactHint = document.getElementById("interact-hint");
const memoryModal = document.getElementById("memory-modal");
const modalCloseButton = document.getElementById("modal-close");
const introPanel = document.getElementById("intro-panel");
const introCloseButton = document.getElementById("intro-close");
const turnstileWarning = document.getElementById("turnstile-warning");
const photoView = document.getElementById("photo-view");
const photoViewCloseButton = document.getElementById("photo-view-close");
const photoViewImage = document.getElementById("photo-view-image");
const photoViewTitle = document.getElementById("photo-view-title");
const photoViewDate = document.getElementById("photo-view-date");
const photoViewDescription = document.getElementById("photo-view-description");
const mobileControls = document.getElementById("mobile-controls");
const mobileMoveLeftButton = document.getElementById("mobile-move-left");
const mobileMoveRightButton = document.getElementById("mobile-move-right");
const mobileActionButton = document.getElementById("mobile-action");
const mobileCloseButton = document.getElementById("mobile-close");
const memoryTitle = document.getElementById("memory-title");
const memoryDate = document.getElementById("memory-date");
const memoryDescription = document.getElementById("memory-description");
const memoryImagePath = document.getElementById("memory-image-path");
const memoryAssetLabel = document.getElementById("memory-asset-label");
const endingPanel = document.getElementById("ending-panel");
const endingCloseButton = document.getElementById("ending-close");

// Oyun sabitleri
// Uzun sergi koridoru için minimum dünya genişliği.
const MIN_WORLD_WIDTH = 26000;
// Oyuncu görünür yüksekliği (insan ölçeği için buradan ayarlayabilirsin).
const PLAYER_DISPLAY_HEIGHT = 228;
const SPRITE_RENDER_SIZE = PLAYER_DISPLAY_HEIGHT;
const CHARACTER_WIDTH = PLAYER_DISPLAY_HEIGHT;
const SPEED = 300; // piksel / saniye
// Gizli hız tuşu basılıyken hareket çarpanı.
const SPEED_BOOST_MULTIPLIER = 50;
const SECRET_BOOST_KEY = "k";
const CAMERA_SMOOTHNESS = 8;
const DEAD_ZONE_RATIO = 0.22;
const INTERACTION_DISTANCE = 130;
// Oyuncunun koridorun başına yakın doğması için sol başlangıç payı.
const PLAYER_START_X = 12;
const ENTRANCE_BUBBLE_DISTANCE = 230;
const TURNSTILE_BLOCK_X = 1170;
const TURNSTILE_WARNING_DISTANCE = 88;
// Koridor yerleşimi: tek bir imleç (currentX) bu aralıklarla ilerler.
const EXHIBIT_START_X = 1410;
const EXHIBIT_MIN_SPACING = 220;
const PHOTO_TO_PHOTO_SPACING = 260;
const PHOTO_TO_OBJECT_SPACING = 320;
const OBJECT_TO_PHOTO_SPACING = 340;
// Yusuf, oyuncuyla aynı ölçek sistemini kullanır.
const YUSUF_DISPLAY_SIZE = PLAYER_DISPLAY_HEIGHT;
const FRAME_LABEL_OFFSET = 44;
const FRAME_LABEL_MIN_BOTTOM = 110;
const FRAME_INNER_PADDING_PERCENT = 1.6;
const YUSUF_WORLD_X = 84;
const YUSUF_WORLD_Y = 0;
const YUSUF_BUBBLE_OFFSET = 20;
const DESK_LEFT = 20;
const DESK_WIDTH = 720;
const DESK_HEIGHT = 360;
const TICKET_HOST_WIDTH = 380;
const TICKET_HOST_LEFT = DESK_LEFT + Math.round((DESK_WIDTH - TICKET_HOST_WIDTH) / 2); // 190
const TICKET_HOST_BOTTOM = 160;
const BUBBLE_LEFT_FROM_DESK = 220;
const BUBBLE_BOTTOM_OFFSET_FROM_DESK = 70;
const MOBILE_BREAKPOINT = 1024;
const MOBILE_FLOATING_MEMORY_LIMIT = 12;
const DESKTOP_FLOATING_MEMORY_LIMIT = 24;

// Formatlar sadece oran referansı olarak kullanılır.
const FRAME_FORMATS = {
  portrait: { aspect: 4 / 5, baseHeight: 172 },
  square: { aspect: 1 / 1, baseHeight: 154 },
  landscape: { aspect: 4 / 3, baseHeight: 148 },
  wide: { aspect: 16 / 9, baseHeight: 138 },
};

const FRAME_ROTATIONS = [0, 0, 0, 0, 0, 0];
const LAMP_RAIL_Y = 24;
const LAMP_APERTURE_OFFSET = 84;
const MIN_SPOTLIGHT_CONE_HEIGHT = 88;
const MIN_SPOTLIGHT_CONE_WIDTH = 110;
const MAX_SPOTLIGHT_CONE_WIDTH = 176;
const FRAME_ASSETS = {
  portrait: {
    primary: "assets/objects/frame_portrait.png",
    fallback: "assets/objects/frame_portrait.png.png",
  },
  landscape: {
    primary: "assets/objects/frame_landscape.png",
    fallback: "assets/objects/frame_landscape.png.png",
  },
};
const FRAME_ASPECTS = {
  portrait: 3 / 4,
  landscape: 4 / 3,
};
const FRAME_RENDER_SIZE = {
  portrait: { width: 260, height: 360 },
  landscape: { width: 360, height: 260 },
};
// PNG çerçeve iç açıklık alanı (yüzde). Foto sadece bu pencerede görünür.
const FRAME_WINDOW_BOUNDS = {
  portrait: { left: 6.1, top: 6.1, width: 87.8, height: 87.6 },
  landscape: { left: 5.9, top: 6.3, width: 88.2, height: 87.4 },
};
// Çerçevelerin duvarda genel montaj yüksekliği (dikey ofset).
const FRAME_MOUNT_OFFSET_Y = 96;
const FRAME_BASE_BOTTOM_BY_TYPE = {
  portrait:  220,
  square:    228,
  landscape: 244,
  wide:      242,
};
const FRAME_BOTTOM_BY_TYPE = Object.fromEntries(
  Object.entries(FRAME_BASE_BOTTOM_BY_TYPE).map(([type, bottom]) => [
    type,
    bottom + FRAME_MOUNT_OFFSET_Y,
  ])
);
const FANUS_EXHIBIT_SIZE = { width: 160, height: 240 };
const FANUS_EXHIBIT_BOTTOM = 90;
const TAPE_EXHIBIT_SIZE = { width: 160, height: 92 };
const TAPE_EXHIBIT_BOTTOM = 108;
const TAPE_EXHIBIT_GAP_AFTER_SHELF = 150;
const TAPE_INSERT_AFTER_SHELF_COUNT = 4;
const TAPE_IMAGE_PATH = "assets/objects/tape/teyp.png";
const TAPE_AUDIO_PATH = "assets/audio/memory_song.mp3";
const PRELUDE_TAPE_IMAGE_PATH = "assets/objects/tape/teyp.png";
const PRELUDE_TAPE_AUDIO_PATH = "assets/audio/prelude_song.mp3";
const PRELUDE_TAPE_OFFSET_FROM_FIRST_FRAME = 320;
const REQUIRED_TICKET_CODE = "1096gün";

let worldWidth = MIN_WORLD_WIDTH;
let exhibitLayouts = [];
let entranceLayouts = [];
let currentInteraction = null;
let entranceZoneElement = null;
let yusufNpcElement = null;
let yusufBubbleElement = null;
let memories = [];
let isModalOpen = false;
let isIntroOpen = false;
let isPhotoViewOpen = false;
let isShelfZoomOpen = false;
let isEndingOpen = false;
let isTicketPanelOpen = false;
let hasEndingBeenShown = false;
let isAccessGranted = false;
let shelfZoomFocus = null;
let shelfZoomScale = 1;
let ticketPurchased = false;
let tripodHubEl = null;
let tripodAngle = 0;
let tripodHasTriggered = false;
let tripodRotating = false;
let mainTapeAudio = null;
let preludeTapeAudio = null;
let isMainTapePlaying = false;
let isPreludeTapePlaying = false;
let currentAnimationName = "idle";
let spriteFrameIndex = 0;
let spriteFrameTimer = 0;
let yusufFrameIndex = 0;
let yusufFrameTimer = 0;

const PLAYER_ANIMATIONS = {
  idle: {
    src: "assets/character/character_idle.png",
    frames: 7,
    fps: 8,
  },
  walk: {
    src: "assets/character/character_walk.png",
    frames: 12,
    fps: 14,
  },
};

const YUSUF_ANIMATION = {
  src: "assets/character/male_idle.png",
  frameWidth: 128,
  frameHeight: 128,
  frames: 7,
  fps: 5,
};

// Dünya koordinatları
const player = { x: 0 };
const camera = { x: 0 };

// Basılı tuşlar
const keys = {
  left: false,
  right: false,
  boost: false,
};

const inputSources = {
  keyboard: {
    left: false,
    right: false,
    boost: false,
  },
  touch: {
    left: false,
    right: false,
    boost: false,
  },
};

let isMobileUI = false;

function syncCombinedKeys() {
  keys.left = inputSources.keyboard.left || inputSources.touch.left;
  keys.right = inputSources.keyboard.right || inputSources.touch.right;
  keys.boost = inputSources.keyboard.boost || inputSources.touch.boost;
}

function getResponsiveProfile() {
  const viewportWidth = viewport.clientWidth || window.innerWidth || 390;
  const viewportHeight = viewport.clientHeight || window.innerHeight || 844;
  const isLandscape = viewportWidth >= viewportHeight;

  if (!isMobileUI) {
    return {
      mode: "desktop",
      sceneScale: 1,
    };
  }

  if (isLandscape && viewportWidth <= 930) {
    return {
      mode: "phone-landscape",
      sceneScale: 0.72,
    };
  }

  if (isLandscape) {
    return {
      mode: "tablet-landscape",
      sceneScale: 0.84,
    };
  }

  if (viewportWidth <= 540) {
    return {
      mode: "phone-portrait",
      sceneScale: 0.8,
    };
  }

  return {
    mode: "tablet-portrait",
    sceneScale: 0.9,
  };
}

function getSceneScale() {
  return getResponsiveProfile().sceneScale;
}

function scaleValue(value) {
  return Math.round(value * getSceneScale());
}

function getCharacterWidth() {
  return scaleValue(CHARACTER_WIDTH);
}

function getInteractionDistance() {
  return scaleValue(INTERACTION_DISTANCE);
}

function getEntranceBubbleDistance() {
  return scaleValue(ENTRANCE_BUBBLE_DISTANCE);
}

function getTurnstileWarningDistance() {
  return scaleValue(TURNSTILE_WARNING_DISTANCE);
}

function applyResponsiveSceneVars() {
  const sceneScale = getSceneScale();
  document.documentElement.style.setProperty("--scene-scale", `${sceneScale}`);
}

/**
 * Klavye girişini hareket durumuna çevirir.
 */
function setKeyState(event, isDown) {
  const key = event.key.toLowerCase();
  if (key === "a" || key === "arrowleft") inputSources.keyboard.left = isDown;
  if (key === "d" || key === "arrowright") inputSources.keyboard.right = isDown;
  if (key === SECRET_BOOST_KEY) inputSources.keyboard.boost = isDown;
  syncCombinedKeys();
}

function setTouchState(direction, isDown) {
  if (!(direction in inputSources.touch)) return;
  inputSources.touch[direction] = isDown;
  syncCombinedKeys();
}

function isTouchLayoutActive() {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px), (pointer: coarse)`).matches;
}

function updateMobileControlsUI() {
  if (!mobileControls) return;

  const shouldShow = isAccessGranted && isMobileUI;
  mobileControls.hidden = !shouldShow;
  mobileControls.setAttribute("aria-hidden", String(!shouldShow));

  if (!shouldShow) return;

  const isDismissVisible = isModalOpen || isIntroOpen || isPhotoViewOpen || isShelfZoomOpen || isEndingOpen;
  const shouldHideMovement = isDismissVisible;
  if (mobileMoveLeftButton) mobileMoveLeftButton.hidden = shouldHideMovement;
  if (mobileMoveRightButton) mobileMoveRightButton.hidden = shouldHideMovement;
  mobileActionButton.hidden = isDismissVisible;
  mobileCloseButton.hidden = !isDismissVisible;
}

function syncResponsiveMode(forceRebuildFloatingMemories = false) {
  const nextMobileUI = isTouchLayoutActive();
  const modeChanged = nextMobileUI !== isMobileUI;
  isMobileUI = nextMobileUI;
  document.body.classList.toggle("mobile-ui-active", isMobileUI);
  applyResponsiveSceneVars();
  if (character) applySpriteFrame();
  updateMobileControlsUI();

  if (forceRebuildFloatingMemories || modeChanged) {
    buildAccessFloatingMemories();
  }
}

function triggerInteractionAction() {
  if (!isAccessGranted) return;
  if (isPhotoViewOpen || isShelfZoomOpen || isModalOpen || isIntroOpen || isTicketPanelOpen) return;
  if (!currentInteraction) return;

  if (currentInteraction.type === "memory") {
    if (currentInteraction.memory.type === "photo") {
      openPhotoView(currentInteraction.memory);
    } else if (
      currentInteraction.memory.type === "object" &&
      currentInteraction.memory.objectStyle === "tape-main"
    ) {
      toggleMainTapeAudio();
    } else if (
      currentInteraction.memory.type === "object" &&
      currentInteraction.memory.objectStyle === "tape-prelude"
    ) {
      togglePreludeTapeAudio();
    } else if (
      currentInteraction.memory.type === "object" &&
      (currentInteraction.memory.objectStyle === "shelf" ||
        currentInteraction.memory.objectStyle === "artifact")
    ) {
      openShelfZoom(currentInteraction.layout);
    } else {
      openMemoryModal(currentInteraction.memory);
    }
    return;
  }

  if (currentInteraction.type === "entrance") {
    if (!ticketPurchased) openTicketPanel();
  }
}

function triggerDismissAction() {
  if (isPhotoViewOpen) {
    closePhotoView();
    return;
  }
  if (isShelfZoomOpen) {
    closeShelfZoom();
    return;
  }
  if (isEndingOpen) {
    closeEndingPanel();
    return;
  }
  if (isTicketPanelOpen) {
    closeTicketPanel();
    return;
  }
  if (isIntroOpen) {
    closeIntroPanel();
    return;
  }
  if (isModalOpen) {
    closeMemoryModal();
  }
}

function normalizeTicketCode(value) {
  return String(value || "").trim().toLocaleLowerCase("tr-TR");
}

function unlockMuseum() {
  isAccessGranted = true;
  if (accessGate) accessGate.hidden = true;
  if (gameRoot) gameRoot.hidden = false;
  updateMobileControlsUI();
  lastTime = performance.now();
}

function openTicketPanel() {
  if (isTicketPanelOpen) return;
  isTicketPanelOpen = true;
  ticketPanel.hidden = false;
  if (ticketInput) { ticketInput.value = ""; ticketInput.focus(); }
  if (ticketError) ticketError.hidden = true;
  updateMobileControlsUI();
}

function closeTicketPanel() {
  if (!isTicketPanelOpen) return;
  isTicketPanelOpen = false;
  ticketPanel.hidden = true;
  updateMobileControlsUI();
}

function tryTicketCode() {
  if (!ticketInput) return;
  const entered = normalizeTicketCode(ticketInput.value);
  if (entered === REQUIRED_TICKET_CODE) {
    closeTicketPanel();
    if (galleryVeil) galleryVeil.classList.add("lifted");
    if (teaserPeek) teaserPeek.classList.add("hidden");
    ticketPurchased = true;
    updateEntranceStateVisuals();
    openIntroPanel();
    return;
  }
  if (ticketError) ticketError.hidden = false;
}

/**
 * Giris ekraninda tum anilari ayni boyutta hafifce ucurur.
 */
function buildAccessFloatingMemories() {
  if (!accessFloatLayer) return;
  accessFloatLayer.innerHTML = "";

  const source = Array.isArray(window.MEMORIES_DATA) ? window.MEMORIES_DATA : [];
  const photos = source.filter(
    (item) => item && item.type === "photo" && typeof item.image === "string" && item.image.length > 0
  );
  if (photos.length === 0) return;
  const floatingLimit = isMobileUI ? MOBILE_FLOATING_MEMORY_LIMIT : DESKTOP_FLOATING_MEMORY_LIMIT;
  const step = Math.max(1, Math.ceil(photos.length / floatingLimit));
  const selectedPhotos = [];

  for (let index = 0; index < photos.length; index += step) {
    selectedPhotos.push(photos[index]);
    if (selectedPhotos.length >= floatingLimit) break;
  }

  const fragment = document.createDocumentFragment();
  const placed = [];
  const minDistance = 7.2; // Yuzde tabanli min mesafe (daha organik dagilim icin)

  function isTooClose(x, y) {
    for (let i = 0; i < placed.length; i += 1) {
      const p = placed[i];
      const dx = x - p.x;
      const dy = y - p.y;
      if (dx * dx + dy * dy < minDistance * minDistance) return true;
    }
    return false;
  }

  for (let index = 0; index < selectedPhotos.length; index += 1) {
    const photo = selectedPhotos[index];
    const img = document.createElement("img");
    img.className = "access-floating-memory";
    img.src = photo.image;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";

    let x = 50;
    let y = 50;
    let attempt = 0;
    while (attempt < 28) {
      const candidateX = 6 + Math.random() * 88;
      const candidateY = 8 + Math.random() * 84;
      // Giris paneli ortasini bir miktar bos birakip daha dengeli kompozisyon elde et.
      const inPanelArea =
        candidateX > 31 && candidateX < 69 && candidateY > 28 && candidateY < 76;
      if (!inPanelArea && !isTooClose(candidateX, candidateY)) {
        x = candidateX;
        y = candidateY;
        break;
      }
      attempt += 1;
    }
    placed.push({ x, y });

    const driftBase = 7 + Math.random() * 8;
    const dx1 = (Math.random() < 0.5 ? -1 : 1) * driftBase;
    const dy1 = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 8);
    const dx2 = (Math.random() < 0.5 ? -1 : 1) * (7 + Math.random() * 9);
    const dy2 = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 8);
    const dx3 = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 7);
    const dy3 = (Math.random() < 0.5 ? -1 : 1) * (7 + Math.random() * 9);
    const dx4 = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 8);
    const dy4 = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 8);
    const rotate = (Math.random() < 0.5 ? -1 : 1) * (0.8 + Math.random() * 2.1);
    const duration = 9 + Math.random() * 5.5; // Bir tik daha hizli
    const delay = -Math.random() * 7.2;

    img.style.setProperty("--x", `${x}%`);
    img.style.setProperty("--y", `${y}%`);
    img.style.setProperty("--dx1", `${dx1}px`);
    img.style.setProperty("--dy1", `${dy1}px`);
    img.style.setProperty("--dx2", `${dx2}px`);
    img.style.setProperty("--dy2", `${dy2}px`);
    img.style.setProperty("--dx3", `${dx3}px`);
    img.style.setProperty("--dy3", `${dy3}px`);
    img.style.setProperty("--dx4", `${dx4}px`);
    img.style.setProperty("--dy4", `${dy4}px`);
    img.style.setProperty("--rotate", `${rotate}deg`);
    img.style.setProperty("--duration", `${duration}s`);
    img.style.setProperty("--delay", `${delay}s`);

    fragment.appendChild(img);
  }

  accessFloatLayer.appendChild(fragment);
}

function resetMovementKeys() {
  inputSources.keyboard.left = false;
  inputSources.keyboard.right = false;
  inputSources.keyboard.boost = false;
  inputSources.touch.left = false;
  inputSources.touch.right = false;
  inputSources.touch.boost = false;
  syncCombinedKeys();

  if (mobileMoveLeftButton) mobileMoveLeftButton.classList.remove("is-pressed");
  if (mobileMoveRightButton) mobileMoveRightButton.classList.remove("is-pressed");
}

function applySpriteFrame() {
  const animation = PLAYER_ANIMATIONS[currentAnimationName];
  const spriteRenderSize = scaleValue(SPRITE_RENDER_SIZE);
  // Bu ayarlar animasyon degismediginde tekrar yazilmaz.
  character.style.setProperty("--player-size", `${spriteRenderSize}px`);
  character.style.backgroundImage = `url("${animation.src}")`;
  character.style.backgroundSize = `${
    animation.frames * spriteRenderSize
  }px ${spriteRenderSize}px`;
  character.style.backgroundPositionX = `${-spriteFrameIndex * spriteRenderSize}px`;
}

function setCharacterAnimation(animationName) {
  if (currentAnimationName === animationName) return;
  currentAnimationName = animationName;
  spriteFrameIndex = 0;
  spriteFrameTimer = 0;
  applySpriteFrame();
}

function updateCharacterSpriteAnimation(dt) {
  const animation = PLAYER_ANIMATIONS[currentAnimationName];
  const spriteRenderSize = scaleValue(SPRITE_RENDER_SIZE);
  const frameDuration = 1 / animation.fps;
  spriteFrameTimer += dt;
  let frameChanged = false;

  while (spriteFrameTimer >= frameDuration) {
    spriteFrameTimer -= frameDuration;
    spriteFrameIndex = (spriteFrameIndex + 1) % animation.frames;
    frameChanged = true;
  }

  // Her frame'de tum sprite stilini yazmak yerine sadece kare degisince konumu guncelle.
  if (frameChanged) {
    character.style.backgroundPositionX = `${-spriteFrameIndex * spriteRenderSize}px`;
  }
}

function applyYusufFrame() {
  if (!yusufNpcElement) return;
  yusufNpcElement.style.setProperty("--yusuf-size", `${YUSUF_DISPLAY_SIZE}px`);
  yusufNpcElement.style.backgroundImage = `url("${YUSUF_ANIMATION.src}")`;
  yusufNpcElement.style.backgroundSize = `${
    YUSUF_ANIMATION.frames * YUSUF_DISPLAY_SIZE
  }px ${YUSUF_DISPLAY_SIZE}px`;
  yusufNpcElement.style.backgroundPositionX = `${-yusufFrameIndex * YUSUF_DISPLAY_SIZE}px`;
}

function updateYusufAnimation(dt) {
  // Yusuf sabit bir NPC'dir: sadece idle frame güncellenir, konumu asla değişmez.
  if (!yusufNpcElement) return;
  const frameDuration = 1 / YUSUF_ANIMATION.fps;
  yusufFrameTimer += dt;

  while (yusufFrameTimer >= frameDuration) {
    yusufFrameTimer -= frameDuration;
    yusufFrameIndex = (yusufFrameIndex + 1) % YUSUF_ANIMATION.frames;
  }

  applyYusufFrame();
}

function initializeTapeAudio() {
  mainTapeAudio = new Audio(TAPE_AUDIO_PATH);
  mainTapeAudio.preload = "auto";
  mainTapeAudio.addEventListener("ended", () => {
    isMainTapePlaying = false;
  });

  preludeTapeAudio = new Audio(PRELUDE_TAPE_AUDIO_PATH);
  preludeTapeAudio.preload = "auto";
  preludeTapeAudio.addEventListener("ended", () => {
    isPreludeTapePlaying = false;
  });
}

function stopPreludeTapeAudio() {
  if (!preludeTapeAudio) return;
  preludeTapeAudio.pause();
  preludeTapeAudio.currentTime = 0;
  isPreludeTapePlaying = false;
}

function stopMainTapeAudio() {
  if (!mainTapeAudio) return;
  mainTapeAudio.pause();
  mainTapeAudio.currentTime = 0;
  isMainTapePlaying = false;
}

function toggleMainTapeAudio() {
  if (!mainTapeAudio) return;
  if (mainTapeAudio.paused) {
    // Ana teyp başlayınca prelude şarkısı dursun.
    stopPreludeTapeAudio();
    const playPromise = mainTapeAudio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        isMainTapePlaying = false;
      });
    }
    isMainTapePlaying = true;
    return;
  }
  stopMainTapeAudio();
}

function togglePreludeTapeAudio() {
  if (!preludeTapeAudio) return;
  if (preludeTapeAudio.paused) {
    // Prelude çalarken ana teyp çalmasın.
    stopMainTapeAudio();
    const playPromise = preludeTapeAudio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        isPreludeTapePlaying = false;
      });
    }
    isPreludeTapePlaying = true;
    return;
  }
  stopPreludeTapeAudio();
}

/**
 * `data/memories.js` içindeki anıları alır ve `order` alanına göre sıralar.
 * Yeni obje sergisi eklemek için:
 * - `type: "object"` yaz.
 * - `image` alanına obje dosya yolunu koy.
 * - Sıra için veri dosyasında ilgili kaydı istediğin yere taşı.
 */
function loadMemories() {
  const source = Array.isArray(window.MEMORIES_DATA) ? window.MEMORIES_DATA : [];

  return [...source]
    .filter(
      (item) =>
        item &&
        typeof item.x === "number" &&
        (item.type === "photo" || item.type === "object")
    )
    .sort((a, b) => a.order - b.order);
}

function fillModalContent(memory) {
  memoryTitle.textContent = memory.modalTitle || memory.title || "Bir Anı";
  memoryDate.textContent = memory.modalDate || memory.date || "Tarih burada";
  memoryDescription.textContent =
    memory.modalDescription ||
    memory.description ||
    "Bu anının açıklaması burada olacak.";
  memoryImagePath.textContent = memory.image || "-";
  memoryAssetLabel.textContent = memory.type === "object" ? "Obje:" : "Görsel:";
}

function openMemoryModal(memory) {
  if (!memory || isModalOpen) return;
  fillModalContent(memory);
  isModalOpen = true;
  memoryModal.hidden = false;
  updateMobileControlsUI();
}

function closeMemoryModal() {
  if (!isModalOpen) return;
  isModalOpen = false;
  memoryModal.hidden = true;
  updateMobileControlsUI();
}

/**
 * Modal başlangıç durumunu güvenli biçimde sıfırlar.
 */
function initializeModalSystem() {
  isModalOpen = false;
  memoryModal.hidden = true;
  updateMobileControlsUI();
}

function openIntroPanel() {
  if (isIntroOpen) return;
  isIntroOpen = true;
  introPanel.hidden = false;
  updateMobileControlsUI();
}

function closeIntroPanel() {
  if (!isIntroOpen) return;
  isIntroOpen = false;
  introPanel.hidden = true;
  updateMobileControlsUI();
}

// ─── Ending panel ────────────────────────────────────────────────────────────
// The ID of the last photo in the exhibition. When the visitor closes that
// photo view, the ending panel appears after a brief pause.
const ENDING_TRIGGER_PHOTO_ID = 67;

function openEndingPanel() {
  if (isEndingOpen || hasEndingBeenShown) return;
  isEndingOpen = true;
  hasEndingBeenShown = true;
  if (endingPanel) {
    // Reset animation so it plays fresh each open
    endingPanel.hidden = false;
    void endingPanel.offsetWidth; // force reflow to restart CSS animations
  }
  updateMobileControlsUI();
}

function closeEndingPanel() {
  if (!isEndingOpen) return;
  isEndingOpen = false;
  if (endingPanel) endingPanel.hidden = true;
  updateMobileControlsUI();
}

/**
 * Turnike kilit/açık görselini günceller.
 * Kapılar, bilet alındıktan sonra oyuncu geçiş bölgesine girince açılır ve
 * oyuncu tamamen geçtikten sonra kapanır.
 */
function updateEntranceStateVisuals() {
  if (!entranceZoneElement) return;
  entranceZoneElement.classList.toggle("ticket-ready", ticketPurchased);
  if (gameRoot) gameRoot.classList.toggle("museum-lit", false);

  // Tripod döndürme: bilet alındığı anda kollar +120° döner.
  // Bu fonksiyon bilet alımında tetiklenir; oyuncunun turnikeye yaklaşması beklenmez.
  if (ticketPurchased && !tripodHasTriggered && tripodHubEl) {
    tripodHasTriggered = true;
    tripodRotating = true;
    tripodAngle = 120;
    tripodHubEl.style.transform = `rotate(${tripodAngle}deg)`;
    setTimeout(() => {
      if (gameRoot) gameRoot.classList.add("museum-lit");
    }, 240);
    setTimeout(() => { tripodRotating = false; }, 650);
    return;
  }

  if (ticketPurchased && gameRoot) {
    gameRoot.classList.add("museum-lit");
  }
}

function initializeIntroPanelSystem() {
  isIntroOpen = false;
  introPanel.hidden = true;
  updateMobileControlsUI();
}

function openPhotoView(memory) {
  if (!memory || isPhotoViewOpen) return;

  photoViewTitle.textContent = memory.modalTitle || memory.title || "Bir Anı";
  photoViewDate.textContent = memory.modalDate || memory.date || "Tarih burada";
  photoViewDescription.textContent =
    memory.modalDescription ||
    memory.description ||
    "Bu anının açıklaması burada olacak.";
  photoViewImage.src = memory.image || "";
  photoViewImage.dataset.memoryId = String(memory.id ?? "");

  isPhotoViewOpen = true;
  resetMovementKeys();
  photoView.hidden = false;
  updateMobileControlsUI();
  // CSS geçişinin tetiklenmesi için bir frame sonra `open` sınıfını ekle.
  requestAnimationFrame(() => photoView.classList.add("open"));
}

function closePhotoView() {
  if (!isPhotoViewOpen) return;
  const closingMemoryId = Number(photoViewImage.dataset.memoryId);
  isPhotoViewOpen = false;
  photoView.classList.remove("open");
  updateMobileControlsUI();

  // Let the CSS close transition play before hiding the element.
  photoView.addEventListener("transitionend", () => {
    photoView.hidden = true;
  }, { once: true });

  // Trigger the closing dedication after the visitor finishes the final photo.
  if (closingMemoryId === ENDING_TRIGGER_PHOTO_ID && !hasEndingBeenShown) {
    setTimeout(openEndingPanel, 560);
  }
}

/**
 * Shelf'e özel sinematik yakınlaşma açar.
 * Fotoğraf panelinden bağımsızdır ve sadece shelf etkileşiminde çalışır.
 */
function openShelfZoom(layout) {
  if (!layout || isShelfZoomOpen) return;

  // Shelf dünya konumu: zoom odağını rafta sabit tut.
  const worldYTop = viewport.clientHeight - layout.bottom - layout.height;
  shelfZoomFocus = {
    worldX: layout.x + layout.width / 2,
    worldY: worldYTop + layout.height * 0.55,
  };

  isShelfZoomOpen = true;
  resetMovementKeys();
  character.classList.remove("walking");
  setCharacterAnimation("idle");
  updateMobileControlsUI();
}

function closeShelfZoom() {
  if (!isShelfZoomOpen) return;
  isShelfZoomOpen = false;
  updateMobileControlsUI();
}

function updateShelfZoom(dt) {
  const targetScale = isShelfZoomOpen ? 2.45 : 1;
  // Zoom-out çok daha hızlı tamamlanır; karakter daha erken geri döner.
  const smooth = Math.min(1, dt * (isShelfZoomOpen ? 8 : 20));
  shelfZoomScale += (targetScale - shelfZoomScale) * smooth;

  // Zoom-out: kamerayı odak noktasına hizala ki zoom→kamera geçişi
  // görsel konumda atlama olmadan seamless gerçekleşsin.
  if (!isShelfZoomOpen && shelfZoomFocus) {
    const maxCameraX = Math.max(0, worldWidth - viewport.clientWidth);
    camera.x = clamp(
      shelfZoomFocus.worldX - viewport.clientWidth * 0.5,
      0,
      maxCameraX
    );
  }

  if (!isShelfZoomOpen && shelfZoomScale <= 1.0001) {
    shelfZoomScale = 1;
    shelfZoomFocus = null;
  }
}

/**
 * Tuşlara göre hareket veya etkileşim tetikler.
 */
function handleKeyDown(event) {
  if (!isAccessGranted) return;
  const key = event.key.toLowerCase();
  if (isPhotoViewOpen) {
    if (key === "escape") triggerDismissAction();
    return;
  }
  if (isShelfZoomOpen) {
    if (key === "escape" || (key === "e" && !event.repeat)) {
      triggerDismissAction();
    }
    return;
  }
  if (isEndingOpen) {
    if (key === "escape" || key === "enter" || key === " ") triggerDismissAction();
    return;
  }

  // Prevent arrow keys from scrolling the page while the game is active.
  if (key === "arrowleft" || key === "arrowright" || key === "arrowup" || key === "arrowdown") {
    event.preventDefault();
  }

  setKeyState(event, true);

  if (key === "e" && !event.repeat) {
    // preventDefault stops the browser from typing "e" into the ticket input
    // that receives focus inside triggerInteractionAction → openTicketPanel.
    event.preventDefault();
    triggerInteractionAction();
  }
  if (key === "escape" && isIntroOpen) {
    triggerDismissAction();
  } else if (key === "escape" && isModalOpen) {
    triggerDismissAction();
  }
}

function handleKeyUp(event) {
  if (!isAccessGranted) return;
  if (isPhotoViewOpen || isShelfZoomOpen) return;
  setKeyState(event, false);
}

function bindHoldControl(button, direction) {
  if (!button) return;

  const release = () => {
    setTouchState(direction, false);
    button.classList.remove("is-pressed");
  };

  button.addEventListener("pointerdown", (event) => {
    if (!isMobileUI) return;
    event.preventDefault();
    if (button.setPointerCapture) {
      button.setPointerCapture(event.pointerId);
    }
    setTouchState(direction, true);
    button.classList.add("is-pressed");
  });

  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("pointerleave", release);
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
window.addEventListener("blur", resetMovementKeys);

bindHoldControl(mobileMoveLeftButton, "left");
bindHoldControl(mobileMoveRightButton, "right");

if (mobileActionButton) {
  mobileActionButton.addEventListener("click", (event) => {
    if (!isMobileUI) return;
    event.preventDefault();
    triggerInteractionAction();
  });
}

if (mobileCloseButton) {
  mobileCloseButton.addEventListener("click", (event) => {
    if (!isMobileUI) return;
    event.preventDefault();
    triggerDismissAction();
  });
}

if (modalCloseButton) {
  modalCloseButton.addEventListener("click", closeMemoryModal);
}

if (memoryModal) {
  memoryModal.addEventListener("click", (event) => {
    if (event.target === memoryModal) {
      closeMemoryModal();
    }
  });
}

if (introCloseButton) {
  introCloseButton.addEventListener("click", closeIntroPanel);
}

if (introPanel) {
  introPanel.addEventListener("click", (event) => {
    if (event.target === introPanel) {
      closeIntroPanel();
    }
  });
}

if (photoViewCloseButton) {
  photoViewCloseButton.addEventListener("click", closePhotoView);
}

if (endingCloseButton) {
  endingCloseButton.addEventListener("click", closeEndingPanel);
}

if (endingPanel) {
  endingPanel.addEventListener("click", (event) => {
    if (event.target === endingPanel) closeEndingPanel();
  });
}

if (accessEnter) {
  accessEnter.addEventListener("click", unlockMuseum);
}

if (ticketSubmit) {
  ticketSubmit.addEventListener("click", tryTicketCode);
}

const ticketClose = document.getElementById("ticket-close");
if (ticketClose) {
  ticketClose.addEventListener("click", closeTicketPanel);
}

if (ticketInput) {
  ticketInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      tryTicketCode();
    }
  });
  ticketInput.addEventListener("input", () => {
    if (ticketError) ticketError.hidden = true;
  });
}

let lastTime = performance.now();

/**
 * Verilen değeri [min, max] aralığına sabitler.
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/**
 * Ekran boyutuna göre dünya genişliğini günceller.
 */
function updateWorldSize() {
  const viewportWidth = viewport.clientWidth;
  worldWidth = Math.max(MIN_WORLD_WIDTH, viewportWidth * 3);
  world.style.width = `${worldWidth}px`;
}

/**
 * Bir çerçeve elemanı üretir.
 */
function createFrameElement(definition) {
  const element = document.createElement("div");
  element.className = `frame format-${definition.type} orientation-${definition.orientation}`;
  element.dataset.memoryId = String(definition.id);
  element.dataset.format = definition.type;
  element.dataset.orientation = definition.orientation;
  element.style.bottom = `${definition.bottom}px`;
  element.style.setProperty("--frame-rotate", `${definition.rotate}deg`);
  const windowBounds =
    FRAME_WINDOW_BOUNDS[definition.orientation] || FRAME_WINDOW_BOUNDS.landscape;
  element.style.setProperty("--frame-photo-inset", `${FRAME_INNER_PADDING_PERCENT}%`);
  element.style.setProperty("--photo-window-left", `${windowBounds.left}%`);
  element.style.setProperty("--photo-window-top", `${windowBounds.top}%`);
  element.style.setProperty("--photo-window-width", `${windowBounds.width}%`);
  element.style.setProperty("--photo-window-height", `${windowBounds.height}%`);

  const photoWindow = document.createElement("div");
  photoWindow.className = "frame-photo-window";

  const photo = document.createElement("img");
  photo.className = "frame-photo";
  photo.src = definition.photoSrc;
  photo.alt = definition.photoAlt;
  photo.loading = "lazy";
  photoWindow.appendChild(photo);

  const shell = document.createElement("img");
  shell.className = "frame-shell";
  shell.src = definition.frameAssetPrimary;
  shell.alt = "";
  shell.decoding = "async";
  shell.loading = "lazy";
  shell.addEventListener(
    "error",
    () => {
      if (shell.src.endsWith(definition.frameAssetFallback)) return;
      shell.src = definition.frameAssetFallback;
    },
    { once: true }
  );

  element.append(photoWindow, shell);

  return element;
}

function getFrameOrientation(memory, format) {
  const normalizedPath = String(memory.image || "").toLowerCase();
  if (memory.orientation === "portrait" || memory.frameType === "portrait") {
    return "portrait";
  }
  if (memory.orientation === "landscape" || memory.frameType === "landscape") {
    return "landscape";
  }
  if (normalizedPath.includes("/portrait/")) return "portrait";
  if (normalizedPath.includes("/landscape/")) return "landscape";
  const aspect = FRAME_FORMATS[format]?.aspect ?? 1;
  return aspect < 1 ? "portrait" : "landscape";
}

function normalizeFrameSizeByOrientation(size, orientation) {
  const fixed = FRAME_RENDER_SIZE[orientation];
  if (fixed) return { ...fixed };
  return size;
}

/**
 * Fotoğraf çerçevesinin altındaki müze etiketini üretir.
 * Etiket metni `data/memories.js` içindeki `wallLabelTitle` ve `wallLabelSubtitle` alanlarından gelir.
 */
function createFrameLabelElement(memory) {
  const label = document.createElement("div");
  label.className = "frame-label";

  const title = document.createElement("span");
  title.className = "frame-label-title";
  title.textContent = memory.wallLabelTitle || memory.title || "Anı Başlığı";

  const subtitle = document.createElement("span");
  subtitle.className = "frame-label-subtitle";
  subtitle.textContent =
    memory.wallLabelSubtitle ||
    `${memory.labelCity || "Şehir"} · ${memory.labelYear || "Yıl"}`;

  label.append(title, subtitle);
  return label;
}

function createMuseumLightElement({ centerX, targetTop, targetHeight, beamWidth, variant = "frame" }) {
  const light = document.createElement("div");
  light.className = `museum-light museum-light--${variant}`;

  const apertureTop = LAMP_RAIL_Y + scaleValue(LAMP_APERTURE_OFFSET);
  const highlightY = targetTop + Math.max(scaleValue(26), Math.round(targetHeight * 0.16));
  const beamHeight = Math.max(
    scaleValue(MIN_SPOTLIGHT_CONE_HEIGHT),
    Math.round(highlightY - apertureTop)
  );
  const wallGlowTop = targetTop - Math.round(scaleValue(18));
  const wallGlowHeight = Math.max(scaleValue(130), Math.round(targetHeight * 0.72));
  const floorGlowTop = targetTop + targetHeight + scaleValue(18);
  const floorGlowWidth = Math.round(beamWidth * 0.9);

  light.style.left = `${Math.round(centerX)}px`;
  light.style.setProperty("--fixture-top", `${LAMP_RAIL_Y}px`);
  light.style.setProperty("--beam-top", `${Math.round(apertureTop)}px`);
  light.style.setProperty("--beam-height", `${beamHeight}px`);
  light.style.setProperty("--beam-width", `${beamWidth}px`);
  light.style.setProperty("--wall-glow-top", `${wallGlowTop}px`);
  light.style.setProperty("--wall-glow-height", `${wallGlowHeight}px`);
  light.style.setProperty("--wall-glow-width", `${Math.round(beamWidth * 1.22)}px`);
  light.style.setProperty("--floor-glow-top", `${floorGlowTop}px`);
  light.style.setProperty("--floor-glow-width", `${floorGlowWidth}px`);

  const beam = document.createElement("div");
  beam.className = "museum-light-beam";

  const fixture = document.createElement("div");
  fixture.className = "museum-light-fixture";

  light.append(beam, fixture);
  return light;
}

/**
 * Cam fanus (dome) sergisi üretir. Her obje türü için kullanılır.
 * Maksimum 6 fanus sergi desteklenir.
 */
function createFanusElement(memory) {
  const fanus = document.createElement("div");
  fanus.className = "fanus-exhibit";
  fanus.dataset.memoryId = String(memory.id);

  const dome = document.createElement("div");
  dome.className = "fanus-dome";

  const glare = document.createElement("div");
  glare.className = "fanus-dome-glare";
  dome.appendChild(glare);

  // Birincil görsel: önce objectImage, yoksa objects dizisinin ilk elemanı
  let primaryImage = null;
  if (typeof memory.objectImage === "string" && memory.objectImage.length > 0) {
    primaryImage = memory.objectImage;
  } else if (Array.isArray(memory.objects) && memory.objects.length > 0) {
    primaryImage = String(memory.objects[0]);
  }

  if (primaryImage) {
    const img = document.createElement("img");
    img.className = "fanus-object-image";
    img.src = primaryImage;
    img.alt = "Sergi objesi";
    img.loading = "lazy";
    dome.appendChild(img);
  } else {
    const fallback = document.createElement("div");
    fallback.className = `fanus-fallback-object object-${memory.objectStyle || "artifact"}`;
    dome.appendChild(fallback);
  }

  const ring = document.createElement("div");
  ring.className = "fanus-dome-ring";

  const pedestal = document.createElement("div");
  pedestal.className = "fanus-pedestal";

  fanus.append(dome, ring, pedestal);
  return fanus;
}

/**
 * 4. raftan sonra yerleşen teyp sergisini üretir.
 */
function createTapeExhibitElement(imagePath = TAPE_IMAGE_PATH) {
  const tapeElement = document.createElement("div");
  tapeElement.className = "tape-exhibit";

  const image = document.createElement("img");
  image.className = "tape-exhibit-image";
  image.src = imagePath;
  image.alt = "Teyp";
  image.loading = "lazy";
  image.addEventListener("error", () => {
    tapeElement.classList.add("fallback");
  });

  tapeElement.appendChild(image);
  return tapeElement;
}

/**
 * Koridor başlangıcındaki müze giriş alanını üretir.
 * Yusuf görselini değiştirmek için `YUSUF_ANIMATION.src` değerini güncelle.
 */
function buildEntranceEnvironment() {
  entranceLayer.innerHTML = "";
  entranceLayouts = [];
  yusufNpcElement = null;
  yusufBubbleElement = null;
  yusufFrameIndex = 0;
  yusufFrameTimer = 0;

  const entranceZone = document.createElement("div");
  entranceZone.className = "entrance-zone";
  entranceZoneElement = entranceZone;

  const desk = document.createElement("div");
  desk.className = "ticket-desk";

  // Görevli görseli: ticket_host.png masanın arkasında konumlanır.
  // Görseli değiştirmek için: assets/objects/entrance/ticket_host.png dosyasını güncelle.
  const host = document.createElement("img");
  host.className = "ticket-host";
  host.src = "assets/objects/entrance/ticket_host.png";
  host.alt = "Müze görevlisi";
  host.draggable = false;
  host.style.left = `${scaleValue(TICKET_HOST_LEFT)}px`;
  host.style.bottom = `${scaleValue(TICKET_HOST_BOTTOM)}px`;

  const yusufBubble = document.createElement("div");
  yusufBubble.className = "yusuf-bubble";
  yusufBubble.textContent =
    "Merhaba, bilet numaranı kontrol edip hemen kapıları açıyorum.";
  yusufBubbleElement = yusufBubble;

  // Baloncuk gişedeki Yusuf görselinin sağ-üst tarafına hizalanır.
  const bubbleLeft = DESK_LEFT + BUBBLE_LEFT_FROM_DESK;
  const bubbleBottom = DESK_HEIGHT - BUBBLE_BOTTOM_OFFSET_FROM_DESK;
  yusufBubble.style.left = `${scaleValue(bubbleLeft)}px`;
  yusufBubble.style.bottom = `${scaleValue(bubbleBottom)}px`;

  const turnstile = document.createElement("div");
  turnstile.className = "turnstile";
  turnstile.innerHTML = `
    <div class="tripod-body"></div>
    <div class="tripod-hub">
      <div class="tripod-arm"></div>
      <div class="tripod-arm"></div>
      <div class="tripod-arm"></div>
    </div>
  `;
  tripodHubEl = turnstile.querySelector('.tripod-hub');

  entranceZone.append(desk, host, yusufBubble, turnstile);
  entranceLayer.appendChild(entranceZone);

  // Giriş etkileşim alanı: bilet masası + Yusuf civarı.
  entranceLayouts.push({
    x: scaleValue(80),
    width: scaleValue(700),
    prompt: "E ile bilet al",
    type: "entrance",
  });
}

/**
 * Format oranı ve ölçeğe göre çerçeve boyutu hesaplar.
 */
function getFrameSize(format, scale = 1) {
  const formatDefinition = FRAME_FORMATS[format] || FRAME_FORMATS.square;
  const height = Math.round(formatDefinition.baseHeight * scale);
  const width = Math.round(height * formatDefinition.aspect);
  return { width, height };
}

/**
 * Yerleşim boşluğu kuralı:
 * - tüm sergiler arasında en az `EXHIBIT_MIN_SPACING`
 * - fotoğraf gruplarında daha yumuşak aralık
 * - obje öncesi/sonrası daha ferah geçiş
 */
function getPlacementSpacing(currentMemory, nextMemory) {
  const minSpacing = scaleValue(EXHIBIT_MIN_SPACING);
  const photoToPhotoSpacing = scaleValue(PHOTO_TO_PHOTO_SPACING);
  const photoToObjectSpacing = scaleValue(PHOTO_TO_OBJECT_SPACING);
  const objectToPhotoSpacing = scaleValue(OBJECT_TO_PHOTO_SPACING);
  if (!nextMemory) return minSpacing;

  if (currentMemory.type === "photo" && nextMemory.type === "photo") {
    return Math.max(minSpacing, photoToPhotoSpacing);
  }

  if (currentMemory.type === "photo" && nextMemory.type === "object") {
    return Math.max(minSpacing, photoToObjectSpacing);
  }

  if (currentMemory.type === "object" && nextMemory.type === "photo") {
    return Math.max(minSpacing, objectToPhotoSpacing);
  }

  return minSpacing;
}

function ensureWorldCapacity(requiredRightX) {
  if (requiredRightX <= worldWidth) return;
  worldWidth = requiredRightX + 240;
  world.style.width = `${worldWidth}px`;
}

/**
 * Veri dosyasındaki sergileri (foto, raf, cam vitrin) dünya genişliğine göre yerleştirir.
 */
function buildMemoryEnvironment() {
  memoryLayer.innerHTML = "";
  const lightLayer = document.createElement("div");
  lightLayer.className = "memory-light-layer";
  const exhibitLayer = document.createElement("div");
  exhibitLayer.className = "memory-exhibit-layer";
  const labelLayer = document.createElement("div");
  labelLayer.className = "memory-label-layer";
  memoryLayer.append(lightLayer, exhibitLayer, labelLayer);
  exhibitLayouts = [];
  memories = loadMemories();
  const sceneScale = getSceneScale();
  const exhibitStartX = scaleValue(EXHIBIT_START_X);
  const tapeExhibitSize = {
    width: scaleValue(TAPE_EXHIBIT_SIZE.width),
    height: scaleValue(TAPE_EXHIBIT_SIZE.height),
  };
  const fanusExhibitSize = {
    width: scaleValue(FANUS_EXHIBIT_SIZE.width),
    height: scaleValue(FANUS_EXHIBIT_SIZE.height),
  };
  const fanusExhibitBottom = scaleValue(FANUS_EXHIBIT_BOTTOM);
  const tapeExhibitBottom = scaleValue(TAPE_EXHIBIT_BOTTOM);
  const tapeGapAfterShelf = scaleValue(TAPE_EXHIBIT_GAP_AFTER_SHELF);
  const preludeTapeOffset = scaleValue(PRELUDE_TAPE_OFFSET_FROM_FIRST_FRAME);
  let currentX = exhibitStartX;
  let shelfCount = 0;
  let tapeInserted = false;
  let preludeTapeInserted = false;

  for (let index = 0; index < memories.length; index += 1) {
    const memory = memories[index];
    const nextMemory = memories[index + 1] ?? null;

    if (memory.type === "object") {
      const isShelfExhibit = memory.objectStyle === "shelf"; // tape trigger only
      const width = fanusExhibitSize.width;
      const height = fanusExhibitSize.height;
      const x = currentX;
      ensureWorldCapacity(x + width);
      const element = createFanusElement(memory);

      element.style.left = `${x}px`;
      element.style.bottom = `${fanusExhibitBottom}px`;
      exhibitLayer.appendChild(element);

      {
        const fanusTopFromVP = viewport.clientHeight - fanusExhibitBottom - height;
        const beamWidth = clamp(
          Math.round(width * 0.7),
          scaleValue(MIN_SPOTLIGHT_CONE_WIDTH),
          scaleValue(MAX_SPOTLIGHT_CONE_WIDTH)
        );
        const light = createMuseumLightElement({
          centerX: x + width / 2,
          targetTop: fanusTopFromVP,
          targetHeight: height,
          beamWidth,
          variant: "fanus",
        });
        lightLayer.appendChild(light);
      }

      exhibitLayouts.push({
        id: memory.id,
        x,
        width,
        bottom: fanusExhibitBottom,
        height,
        element,
        memory,
      });

      if (isShelfExhibit) {
        shelfCount += 1;
        if (!tapeInserted && shelfCount === TAPE_INSERT_AFTER_SHELF_COUNT) {
          const tapeX = x + width + tapeGapAfterShelf;
          const tapeElement = createTapeExhibitElement();
          const tapeMemory = {
            id: "tape_exhibit_01",
            type: "object",
            objectStyle: "tape-main",
            title: "Müzik Köşesi",
          };

          ensureWorldCapacity(tapeX + tapeExhibitSize.width);
          tapeElement.style.left = `${tapeX}px`;
          tapeElement.style.bottom = `${tapeExhibitBottom}px`;
          exhibitLayer.appendChild(tapeElement);

          exhibitLayouts.push({
            id: tapeMemory.id,
            x: tapeX,
            width: tapeExhibitSize.width,
            bottom: tapeExhibitBottom,
            height: tapeExhibitSize.height,
            element: tapeElement,
            memory: tapeMemory,
          });

          tapeInserted = true;
        }
      }

      currentX += width + getPlacementSpacing(memory, nextMemory);
      continue;
    }

    // Fotoğraf anıları için çerçeve üretimi
    const format =
      (memory.frameType && FRAME_FORMATS[memory.frameType] && memory.frameType) ||
      (memory.format && FRAME_FORMATS[memory.format] && memory.format) ||
      "portrait";
    const orientation = getFrameOrientation(memory, format);
    const bottom = scaleValue(FRAME_BOTTOM_BY_TYPE[format] ?? FRAME_BOTTOM_BY_TYPE.square);
    const rotate = FRAME_ROTATIONS[index % FRAME_ROTATIONS.length];
    const baseSize = getFrameSize(format, sceneScale);
    const size = normalizeFrameSizeByOrientation(baseSize, orientation);
    const x = currentX;
    ensureWorldCapacity(x + size.width);
    const frame = createFrameElement({
      id: memory.id,
      type: format,
      orientation,
      bottom,
      rotate,
      photoSrc: memory.image || "",
      photoAlt: memory.title || "Anı fotoğrafı",
      frameAssetPrimary: FRAME_ASSETS[orientation].primary,
      frameAssetFallback: FRAME_ASSETS[orientation].fallback,
    });

    frame.style.left = `${x}px`;
    frame.style.width = `${size.width}px`;
    frame.style.height = `${size.height}px`;

    exhibitLayer.appendChild(frame);

    {
      const frameTopFromVP = viewport.clientHeight - bottom - size.height;
      const beamWidth = clamp(
        Math.round(size.width * 0.68),
        scaleValue(MIN_SPOTLIGHT_CONE_WIDTH),
        scaleValue(MAX_SPOTLIGHT_CONE_WIDTH)
      );
      const light = createMuseumLightElement({
        centerX: x + size.width / 2,
        targetTop: frameTopFromVP,
        targetHeight: size.height,
        beamWidth,
        variant: "frame",
      });
      lightLayer.appendChild(light);
    }

    const label = createFrameLabelElement(memory);
    label.style.left = `${x + size.width / 2}px`;
    label.style.bottom = `${Math.max(scaleValue(FRAME_LABEL_MIN_BOTTOM), bottom - scaleValue(FRAME_LABEL_OFFSET))}px`;
    labelLayer.appendChild(label);

    exhibitLayouts.push({
      id: memory.id,
      x,
      width: size.width,
      bottom,
      height: size.height,
      element: frame,
      memory,
    });

    if (!preludeTapeInserted) {
      const preludeTapeX = x + preludeTapeOffset;
      const preludeTapeElement = createTapeExhibitElement(PRELUDE_TAPE_IMAGE_PATH);
      const preludeTapeMemory = {
        id: "tape_exhibit_prelude_01",
        type: "object",
        objectStyle: "tape-prelude",
        title: "Ön Müzik Köşesi",
      };
      ensureWorldCapacity(preludeTapeX + tapeExhibitSize.width);
      preludeTapeElement.style.left = `${preludeTapeX}px`;
      preludeTapeElement.style.bottom = `${tapeExhibitBottom}px`;
      exhibitLayer.appendChild(preludeTapeElement);
      exhibitLayouts.push({
        id: preludeTapeMemory.id,
        x: preludeTapeX,
        width: tapeExhibitSize.width,
        bottom: tapeExhibitBottom,
        height: tapeExhibitSize.height,
        element: preludeTapeElement,
        memory: preludeTapeMemory,
      });
      preludeTapeInserted = true;
    }

    currentX += size.width + getPlacementSpacing(memory, nextMemory);
  }

  // ── Lamp rail track ────────────────────────────────────────────────────────
  // A visible metallic track that mounts to the ceiling and from which each
  // lamp fixture hangs. Rendered inside memory-layer (z-index 10) so it appears
  // above the ceiling-layer overlay that would otherwise hide the wall-layer rail.
  // The track spans from just before the first exhibit to just after the last.
  {
    const lastExhibit = exhibitLayouts[exhibitLayouts.length - 1];
    const trackStartX = Math.max(0, exhibitStartX - scaleValue(160));
    const trackEndX = lastExhibit
      ? lastExhibit.x + lastExhibit.width + scaleValue(160)
      : worldWidth;
    const trackEl = document.createElement("div");
    trackEl.className = "lamp-track";
    trackEl.style.left = `${Math.round(trackStartX)}px`;
    trackEl.style.width = `${Math.round(Math.max(0, trackEndX - trackStartX))}px`;
    // Align track top with the lamp mount rail so every fixture shares the same wall line.
    trackEl.style.top = `${LAMP_RAIL_Y - 1}px`;
    lightLayer.prepend(trackEl);
  }
  // ───────────────────────────────────────────────────────────────────────────

}

/**
 * Karakteri dünya içinde başlangıç noktasına yerleştirir.
 */
function initializeScene() {
  updateWorldSize();
  const characterWidth = getCharacterWidth();

  // Karakteri koridorun sol başlangıcına yakın konumda başlat (duvara yapışmadan).
  player.x = clamp(scaleValue(PLAYER_START_X), 0, worldWidth - characterWidth);

  // Deneyim başında kamera da koridorun solunda başlasın.
  const maxCameraX = Math.max(0, worldWidth - viewport.clientWidth);
  camera.x = clamp(0, 0, maxCameraX);
}

/**
 * Klavye girdisiyle karakter konumunu günceller.
 */
function updatePlayer(dt) {
  const characterWidth = getCharacterWidth();
  let direction = 0;
  if (keys.left) direction -= 1;
  if (keys.right) direction += 1;
  const scaledSpeed = scaleValue(SPEED);
  const currentSpeed = keys.boost ? scaledSpeed * SPEED_BOOST_MULTIPLIER : scaledSpeed;

  player.x += direction * currentSpeed * dt;

  // Bilet alınana kadar turnike hattından geçişe izin verme.
  if (!ticketPurchased) {
    const maxXBeforeTurnstile = scaleValue(TURNSTILE_BLOCK_X) - characterWidth;
    player.x = Math.min(player.x, maxXBeforeTurnstile);
  }

  player.x = clamp(player.x, 0, worldWidth - characterWidth);

  character.classList.toggle("walking", direction !== 0);
  setCharacterAnimation(direction === 0 ? "idle" : "walk");
  if (direction < 0) character.classList.add("facing-left");
  if (direction > 0) character.classList.remove("facing-left");
}

/**
 * Kamera hedefini dead-zone yaklaşımıyla hesaplar.
 * Karakter dead-zone dışına çıktığında kamera takip eder.
 */
function getTargetCameraX() {
  const viewportWidth = viewport.clientWidth;
  const maxCameraX = Math.max(0, worldWidth - viewportWidth);
  const deadZoneHalf = viewportWidth * DEAD_ZONE_RATIO;
  const viewportCenter = viewportWidth / 2;
  const characterWidth = getCharacterWidth();

  const deadZoneLeft = viewportCenter - deadZoneHalf;
  const deadZoneRight = viewportCenter + deadZoneHalf;
  const playerScreenX = player.x - camera.x;

  let targetX = camera.x;
  if (playerScreenX < deadZoneLeft) {
    targetX = player.x - deadZoneLeft;
  } else if (playerScreenX + characterWidth > deadZoneRight) {
    targetX = player.x + characterWidth - deadZoneRight;
  }

  return clamp(targetX, 0, maxCameraX);
}

/**
 * Kamerayı hedefe yumuşak biçimde yaklaştırır.
 */
function updateCamera(dt) {
  const targetCameraX = getTargetCameraX();
  const follow = Math.min(1, CAMERA_SMOOTHNESS * dt);
  camera.x += (targetCameraX - camera.x) * follow;
}

/**
 * Dünya ve karakterin ekrana çizimini uygular.
 */
function render() {
  // Zoom-in: karakter gizlenir. Zoom-out: scale ~1.08'e düşünce hemen geri döner
  // (~150ms), dünya henüz %8 büyük olduğundan fark edilmez.
  // Kamera/oyuncu senkronizasyonu ise scale tam 1'e ulaşana kadar devam eder.
  character.hidden = isShelfZoomOpen || shelfZoomScale > 1.08;
  character.style.left = `${player.x}px`;
  if (shelfZoomFocus && shelfZoomScale > 1.001) {
    const effectiveZoomScale = shelfZoomScale;
    const targetScreenX = viewport.clientWidth * 0.5;
    const targetScreenY = viewport.clientHeight * 0.68;
    const desiredTranslateX = targetScreenX - shelfZoomFocus.worldX * effectiveZoomScale;
    const desiredTranslateY = targetScreenY - shelfZoomFocus.worldY * effectiveZoomScale;
    const scaledWorldWidth = worldWidth * effectiveZoomScale;
    const scaledWorldHeight = viewport.clientHeight * effectiveZoomScale;
    const minTranslateX = Math.min(0, viewport.clientWidth - scaledWorldWidth);
    const minTranslateY = Math.min(0, viewport.clientHeight - scaledWorldHeight);
    // Zoom-out sirasinda beyaz bosluk olusmamasI icin world transform degerlerini sinirla.
    const translateX = clamp(desiredTranslateX, minTranslateX, 0);
    const translateY = clamp(desiredTranslateY, minTranslateY, 0);
    world.style.transform = `translate(${translateX}px, ${translateY}px) scale(${effectiveZoomScale})`;
    return;
  }

  world.style.transform = `translateX(${-camera.x}px) scale(1)`;
}

/**
 * Karakter bir çerçeveye yaklaştığında etkileşim ipucunu gösterir.
 */
function updateInteractions() {
  const playerCenterX = player.x + getCharacterWidth() / 2;
  const interactionDistance = getInteractionDistance();
  let bestCandidate = null;
  let bestDistance = Infinity;
  let nearEntranceForBubble = false;
  let nearLockedTurnstile = false;

  for (const layout of exhibitLayouts) {
    const centerX = layout.x + layout.width / 2;
    const distance = Math.abs(playerCenterX - centerX);
    if (distance > interactionDistance) continue;

    let prompt = "E ile incele";
    if (layout.memory?.objectStyle === "tape-main") {
      prompt = isMainTapePlaying ? "E ile durdur" : "E ile çal";
    } else if (layout.memory?.objectStyle === "tape-prelude") {
      prompt = isPreludeTapePlaying ? "E ile durdur" : "E ile çal";
    }
    if (distance >= bestDistance) continue;
    bestDistance = distance;
    bestCandidate = {
      distance,
      prompt,
      type: "memory",
      memory: layout.memory,
      layout,
    };
  }

  for (const layout of entranceLayouts) {
    const centerX = layout.x + layout.width / 2;
    const distance = Math.abs(playerCenterX - centerX);
    if (distance <= getEntranceBubbleDistance()) {
      nearEntranceForBubble = true;
    }
    if (distance > interactionDistance) continue;
    if (distance >= bestDistance) continue;
    bestDistance = distance;
    bestCandidate = {
      distance,
      prompt: layout.prompt,
      type: layout.type,
    };
  }

  if (!ticketPurchased) {
    nearLockedTurnstile =
      playerCenterX >= scaleValue(TURNSTILE_BLOCK_X) - getTurnstileWarningDistance() &&
      playerCenterX <= scaleValue(TURNSTILE_BLOCK_X) + getTurnstileWarningDistance();
  }

  currentInteraction = bestCandidate;

  if (yusufBubbleElement) {
    yusufBubbleElement.hidden = !nearEntranceForBubble;
  }
  turnstileWarning.hidden = !nearLockedTurnstile || isPhotoViewOpen || isShelfZoomOpen || isTicketPanelOpen;

  if (currentInteraction && !isModalOpen && !isIntroOpen && !isPhotoViewOpen && !isShelfZoomOpen && !isTicketPanelOpen) {
    interactHint.textContent = currentInteraction.prompt;
    interactHint.hidden = false;
    return;
  }

  interactHint.hidden = true;
}

function updateHelpVisibility() {
  const helpText = document.querySelector(".help");
  if (!helpText) return;
  helpText.hidden = ticketPurchased;
}

/**
 * Ana animasyon döngüsü.
 */
function update(now) {
  if (!isAccessGranted) {
    lastTime = now;
    requestAnimationFrame(update);
    return;
  }

  const dt = (now - lastTime) / 1000;
  lastTime = now;

  // Zoom geçişi sırasında (açılırken veya kapanırken) oyuncu hareketi dondurulur.
  const zoomActive = isShelfZoomOpen || shelfZoomScale > 1.001;
  if (!isPhotoViewOpen && !zoomActive && !isTicketPanelOpen) {
    updatePlayer(dt);
  }
  updateCharacterSpriteAnimation(dt);
  updateYusufAnimation(dt);
  // updateShelfZoom önce çalışır; kamerayı odak noktasına senkronlar.
  updateShelfZoom(dt);
  // Kamera takibi yalnızca zoom bitmişken çalışır; zoom sırasında camera.x
  // updateShelfZoom tarafından yönetilir.
  if (!zoomActive) {
    updateCamera(dt);
  }
  render();
  updateInteractions();
  updateHelpVisibility();

  requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
  if (isShelfZoomOpen) closeShelfZoom();
  const previousWorldWidth = worldWidth;
  const previousPlayerRatio = previousWorldWidth > 0 ? player.x / previousWorldWidth : 0.5;

  syncResponsiveMode(true);
  updateWorldSize();

  // Karakteri yeni dünya ölçüsüne orantılı taşı
  player.x = clamp(previousPlayerRatio * worldWidth, 0, worldWidth - getCharacterWidth());
  buildEntranceEnvironment();
  buildMemoryEnvironment();

  const maxCameraX = Math.max(0, worldWidth - viewport.clientWidth);
  camera.x = clamp(camera.x, 0, maxCameraX);
});

syncResponsiveMode(true);
initializeScene();
initializeTapeAudio();
buildEntranceEnvironment();
buildMemoryEnvironment();
if (teaserPeek && memories.length > 0) {
  teaserPeek.style.backgroundImage = `url('${memories[0].image}')`;
}
initializeModalSystem();
initializeIntroPanelSystem();
updateEntranceStateVisuals();
setCharacterAnimation("idle");
render();
updateInteractions();
updateHelpVisibility();
requestAnimationFrame(update);
