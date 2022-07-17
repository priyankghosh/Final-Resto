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

        // GET: api/Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AdminUser>> GetAdminUsers(int id)
        {
            var admin = await _context.AdminUsers.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        //To check if admin exists for the same set of id, pass and username
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

        //For adding the admins
        [HttpPost]
        [Route("adminregister")]
        public async Task<ActionResult<AdminUser>> AdminRegister(AdminUser admin)
        {
            _context.AdminUsers.Add(admin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdminUsers", new { id = admin.AdminId }, admin);
        }
    }
}
