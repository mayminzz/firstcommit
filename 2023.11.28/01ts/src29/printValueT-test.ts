import { printValueT, IValuable } from "./print-IValuable-interface";
import { Valuable } from "./Valuable";

printValueT(new Valuable(1));
printValueT({ value: true });

