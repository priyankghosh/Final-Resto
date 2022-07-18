using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantAPI.Models;
using System.Collections.Generic;
using System.Linq;
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
            AdminUser usr = users.Find(e =>
                e.AdminPass == admin.AdminPass &&
                e.AdminUsername == admin.AdminUsername
            );

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
            List<AdminUser> users = await _context.AdminUsers.ToListAsync();
            AdminUser usr = users.Find(e =>
                e.AdminPass == admin.AdminPass &&
                e.AdminUsername == admin.AdminUsername
            );

            if (usr == null)
            {
                _context.AdminUsers.Add(admin);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetAdminUsers", new { id = admin.AdminId }, admin);
            }

            return BadRequest();
        }

        // PUT: api/Admin/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdminUsers(int id, AdminUser admin)
        {
            if (id != admin.AdminId)
            {
                return BadRequest();
            }

            _context.Entry(admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Admin/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdminUsers(int id)
        {
            var admin = await _context.AdminUsers.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            _context.AdminUsers.Remove(admin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AdminExists(int id)
        {
            return _context.AdminUsers.Any(e => e.AdminId == id);
        }

    }
}
