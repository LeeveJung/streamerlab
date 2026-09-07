export type BadgeType = 'short' | 'long' | 'live' | 'none';
export type ViewContext = 'desktop' | 'mobile' | 'sidebar';

export interface TesterState {
  imageSrc: string | null;
  channelName: string;
  videoTitle: string; // <-- NEU: Videotitel
  badgeType: BadgeType;
  badgeText: string;
  viewContext: ViewContext;
  isDarkMode: boolean;
  blurLevel: number;
  showProgressBar: boolean;
  showDangerZone: boolean;
}

type Listener = (state: TesterState) => void;

export class ThumbnailEngine {
  private static instance: ThumbnailEngine;

  private state: TesterState = {
    imageSrc: null,
    channelName: 'Dein Kanalname',
    videoTitle: 'Dein epischer Videotitel in der YouTube Feed-Vorschau...', // Standardwert
    badgeType: 'short',
    badgeText: '10:42',
    viewContext: 'desktop',
    isDarkMode: true,
    blurLevel: 0,
    showProgressBar: true,
    showDangerZone: true,
  };

  private listeners: Set<Listener> = new Set();

  private constructor() {}

  public static getInstance(): ThumbnailEngine {
    if (!ThumbnailEngine.instance) {
      ThumbnailEngine.instance = new ThumbnailEngine();
    }
    return ThumbnailEngine.instance;
  }

  public getState(): TesterState {
    return { ...this.state };
  }

  public updateState(partialState: Partial<TesterState>): void {
    if (partialState.badgeType && partialState.badgeType !== this.state.badgeType) {
      if (partialState.badgeType === 'short') partialState.badgeText = '10:42';
      if (partialState.badgeType === 'long') partialState.badgeText = '1:15:30';
      if (partialState.badgeType === 'live') partialState.badgeText = 'LIVE';
    }

    this.state = { ...this.state, ...partialState };
    this.notify();
  }

  public handleFileSelect(file: File): void {
    if (!file.type.startsWith('image/')) return;

    if (this.state.imageSrc) {
      URL.revokeObjectURL(this.state.imageSrc);
    }

    const objectUrl = URL.createObjectURL(file);
    this.updateState({ imageSrc: objectUrl });
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener(this.getState()));
  }
}