namespace ApiProject
{
    public class ServiceRecette
    {
        private readonly IRepositoryRecette repositoryRecette;

        public ServiceRecette(IRepositoryRecette repositoryRecette)
        {
            this.repositoryRecette = repositoryRecette;
        }

        public bool AddIngredient(string? name)
        {
            if (string.IsNullOrWhiteSpace(name)) throw new ArgumentException(name, nameof(name));

            // dev intermediaires:
            // throw new NotImplementedException();
            // return true;
            // repositoryRecette.AddIngredient(name.ToUpper());
            // return false;

            return repositoryRecette.AddIngredient(name??"default");
        }

        public void Functionality1() { }
        public void Functionality2() { }
        public void Functionality3() { }
        public void Functionality4() { }
        public void Functionality5() { }
        public void Functionality6() { }
    }
}
