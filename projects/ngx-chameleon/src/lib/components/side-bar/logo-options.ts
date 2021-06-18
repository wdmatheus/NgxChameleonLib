interface LogoOptions{
  default: LogoData;
  brand: LogoData
}

interface LogoData{
  url: string;
  width?: number;
  height?: number;
}

export { LogoData, LogoOptions }
