for (int i = 1; i < 10; i++){
    System.out.println(i);
}

int[] primes = {2,3,5,7,11,13};
for (int p:primes)
{
    System.out.println(p);
}

private int getValue() {
  System.out.println("Called here");
  return 20;
}

public void useOptional() {
  Optional<Integer> a = Optional.of(10);
  int result = a.orElse(getValue());
  System.out.println(result);
  int anotherResult = a.orElseGet(() -> getValue());
}