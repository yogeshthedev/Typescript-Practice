function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order : ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size === "small") {
    return `small cuttin chai..,`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai..,`;
  }
  return `chai order #${size}`;
}

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}
class CuttingChai {
  serve() {
    return `Serving Cutting Chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai:${item}`;
}

type MasalaChai = {
  type: "masala";
  spicelevel: number;
};
type GingerChai = {
  type: "ginger";
  amount: number;
};
type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala chai`;
      break;
    case "ginger":
      return `Ginger chai`;
      break;
    case "elaichi":
      return `Elaichi chai`;
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
    //
  }
}

function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
