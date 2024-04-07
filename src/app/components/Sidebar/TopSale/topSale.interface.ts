interface Goods {
    id: number;
    name: string;
  }
  
  interface RootState {
    favorites: Goods[];
  }