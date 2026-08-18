namespace AlgeriaDiasporaMalmö.Domain.Entities;

public class Member
{
    public Guid Id { get; private set; }
    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string Email { get; private set; }
    public string? PhoneNumber { get; private set; }
    public DateTime? DateOfBirth { get; private set; }
    public string? City { get; private set; }
    public string? CountryOfOrigin { get; private set; }
    public DateTime JoinedDate { get; private set; }
    public MemberRole Role { get; private set; }
    public string? ProfileImageUrl { get; private set; }
    public bool IsActive { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }

    // Domain events
    private readonly List<IDomainEvent> _domainEvents = new();
    public IReadOnlyCollection<IDomainEvent> DomainEvents => _domainEvents.AsReadOnly();

    private Member() { } // For EF Core

    public Member(string firstName, string lastName, string email, string? phoneNumber = null)
    {
        Id = Guid.NewGuid();
        FirstName = firstName ?? throw new ArgumentNullException(nameof(firstName));
        LastName = lastName ?? throw new ArgumentNullException(nameof(lastName));
        Email = email ?? throw new ArgumentNullException(nameof(email));
        PhoneNumber = phoneNumber;
        Role = MemberRole.Member;
        IsActive = true;
        JoinedDate = DateTime.UtcNow;
        CreatedAt = DateTime.UtcNow;
        
        AddDomainEvent(new MemberCreatedEvent(Id, Email));
    }

    public void UpdateProfile(string? firstName = null, string? lastName = null, 
                             string? phoneNumber = null, string? city = null,
                             string? countryOfOrigin = null)
    {
        if (firstName != null) FirstName = firstName;
        if (lastName != null) LastName = lastName;
        if (phoneNumber != null) PhoneNumber = phoneNumber;
        if (city != null) City = city;
        if (countryOfOrigin != null) CountryOfOrigin = countryOfOrigin;
        UpdatedAt = DateTime.UtcNow;
    }

    public void UpdateRole(MemberRole newRole)
    {
        Role = newRole;
        UpdatedAt = DateTime.UtcNow;
    }

    public void Deactivate()
    {
        IsActive = false;
        UpdatedAt = DateTime.UtcNow;
    }

    public void Reactivate()
    {
        IsActive = true;
        UpdatedAt = DateTime.UtcNow;
    }

    private void AddDomainEvent(IDomainEvent domainEvent)
    {
        _domainEvents.Add(domainEvent);
    }

    public void ClearDomainEvents()
    {
        _domainEvents.Clear();
    }
}

public enum MemberRole
{
    Member,
    Volunteer,
    BoardMember,
    Admin
}