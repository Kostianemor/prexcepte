constructor(private name: string, private readonly age: number) {
  if (!name) {
    throw new Error('Name is required');
  }
  if (age <= 0) {
    throw new Error('Age must be a positive number');
  }
}
