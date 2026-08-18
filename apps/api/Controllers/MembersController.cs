using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AlgeriaDiasporaMalmö.Application.DTOs;
using AlgeriaDiasporaMalmö.Application.Interfaces;

namespace AlgeriaDiasporaMalmö.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class MembersController : ControllerBase
{
    private readonly IMemberService _memberService;
    private readonly ILogger<MembersController> _logger;

    public MembersController(IMemberService memberService, ILogger<MembersController> logger)
    {
        _memberService = memberService;
        _logger = logger;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetAll()
    {
        try
        {
            var members = await _memberService.GetAllAsync();
            return Ok(members);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting all members");
            return StatusCode(500, "An error occurred while retrieving members");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MemberDto>> GetById(Guid id)
    {
        try
        {
            var member = await _memberService.GetByIdAsync(id);
            if (member == null)
                return NotFound($"Member with ID {id} not found");
            
            return Ok(member);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting member {MemberId}", id);
            return StatusCode(500, "An error occurred while retrieving the member");
        }
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<MemberDto>> Create([FromBody] CreateMemberDto createDto)
    {
        try
        {
            var member = await _memberService.CreateAsync(createDto);
            return CreatedAtAction(nameof(GetById), new { id = member.Id }, member);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating member");
            return StatusCode(500, "An error occurred while creating the member");
        }
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Admin,BoardMember")]
    public async Task<ActionResult<MemberDto>> Update(Guid id, [FromBody] UpdateMemberDto updateDto)
    {
        try
        {
            var member = await _memberService.UpdateAsync(id, updateDto);
            if (member == null)
                return NotFound($"Member with ID {id} not found");
            
            return Ok(member);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating member {MemberId}", id);
            return StatusCode(500, "An error occurred while updating the member");
        }
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> Delete(Guid id)
    {
        try
        {
            var result = await _memberService.DeleteAsync(id);
            if (!result)
                return NotFound($"Member with ID {id} not found");
            
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting member {MemberId}", id);
            return StatusCode(500, "An error occurred while deleting the member");
        }
    }
}