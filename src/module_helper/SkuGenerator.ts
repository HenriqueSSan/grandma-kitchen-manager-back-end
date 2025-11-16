type SkuGeneratorConfig = {
  prefix: string;
  length: number;
  separator: string;
  includeTimestamp: boolean;
  charset: string;
  category: string | string[];
  brand: string | string[];
  productName: string | string[];
};

interface SkuGeneratorInterface {
  generate(config: SkuGeneratorConfig): string;
}

export class SkuGenerator implements SkuGeneratorInterface {
  private static instance: SkuGenerator;

  static handle() {
    if (!this.instance) this.instance = new SkuGenerator();

    return this.instance;
  }

  generate(config = {} as Partial<SkuGeneratorConfig>) {
    const {
      prefix = '',
      length = 8,
      separator = '_',
      includeTimestamp = false,
      charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      category = '',
      brand = '',
      productName = '',
    }: Partial<SkuGeneratorConfig> = config;

    let randomPart = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomPart += charset[randomIndex];
    }

    let skuParts = [];

    if (category) {
      if (Array.isArray(category)) {
        skuParts.push(category.map(cat => this.formatString(cat)).join(''));
      } else {
        skuParts.push(this.formatString(category));
      }
    }

    if (brand) {
      if (Array.isArray(brand)) {
        skuParts.push(brand.map(br => this.formatString(br)).join(''));
      } else {
        skuParts.push(this.formatString(brand));
      }
    }

    if (productName) {
      if (Array.isArray(productName)) {
        skuParts.push(productName.map(name => this.formatProductName(name)).join(''));
      } else {
        skuParts.push(this.formatProductName(productName));
      }
    }

    if (prefix) {
      skuParts.push(prefix);
    }

    skuParts.push(randomPart);

    if (includeTimestamp) {
      const timestamp = Date.now().toString(36).toUpperCase();
      skuParts.push(timestamp);
    }

    return skuParts.join(separator);
  }

  formatString(str: string) {
    return str
      .toString()
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .substring(0, 4);
  }

  formatProductName(str: string) {
    return str
      .toString()
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .substring(0, 6);
  }
}
