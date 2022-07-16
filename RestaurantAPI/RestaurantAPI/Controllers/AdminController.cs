using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RestaurantAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly RestaurantDbContext _context;

        public AdminController(RestaurantDbContext context)
        {
            _context = context;
        }

        // GET: api/Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminUser>>> GetAdminUsers()
        {
            return await _context.AdminUsers.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<AdminUser>> AdminLogin(AdminUser admin)
        {
            //_context.OrderMasters.Add(AdminUser);
            //await _context.SaveChangesAsync();

            List<AdminUser> users = await _context.AdminUsers.ToListAsync();
            AdminUser usr = users.Find(e => e.AdminId == admin.AdminId && e.AdminPass == admin.AdminPass && e.AdminUsername == admin.AdminUsername);

            if (usr != null)
                return Ok();
            else
                return BadRequest();
        }

    }
}
