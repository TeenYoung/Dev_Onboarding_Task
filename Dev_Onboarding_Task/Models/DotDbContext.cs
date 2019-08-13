using Microsoft.EntityFrameworkCore;

namespace Dev_Onboarding_Task.Models
{
    public class DotDbContext : DbContext
    {
        public DotDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }


    }
}
