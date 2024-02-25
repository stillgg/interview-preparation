// зависимость инъекция через конструктор
class Logger {
  log(message) {
    console.log(message);
  }
}

class ProductService {
  constructor(logger) {
    this.logger = logger;
  }

  getProduct(productId) {
    this.logger.log(`Getting product with ID ${productId}`);
    // логика получения продукта
  }
}

const logger = new Logger();
const productService = new ProductService(logger);
productService.getProduct(123);
