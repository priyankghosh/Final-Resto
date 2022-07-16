using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantAPI.Models
{
    public class AdminUser
    {
        [Key]
        public int AdminId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string AdminUsername { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string AdminPass { get; set; }

    }
}
